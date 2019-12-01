import React from 'react';
import { Dispatch } from 'redux';
//import { Router, Route } from 'react-router';
import { Router, Route } from 'dva/router';//react-router
import { Link } from 'react-router-dom';
import dva, { connect, RouterAPI, DvaInstance } from 'dva';//connect=react-redux connect
interface Counter1State {
    number: number
}
type Counter1Props = Counter1State & {
    dispatch: Dispatch
}
interface Counter2State {
    number: number
}
type Counter2Props = Counter2State & {
    dispatch: Dispatch
}
type CombinedState = {
    counter1: Counter1State,
    counter2: Counter2State
}
//创建app
let app: DvaInstance = dva();
//redux里combineReducers reducer都有自己的状态和reducer处理函数
//combineReducers({counter1:counter1,counter2:counter2})
//combineState = {counter1:{number:0},counter2:{number:0}};
/* function reducer(state, action): state {
    if (action.type === 'increment') {
        return increment(state);
    }
    if (action.type === 'decrement') {
        return decrement(state);
    }
} */
const delay = (ms: number) => new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();
    }, ms);
});
app.model({
    namespace: 'counter1',
    state: { number: 0 },
    reducers: {
        increment(state) {
            return { number: state.number + 1 };
        },
        decrement(state) {
            return { number: state.number - 1 };
        }
    },
    effects: {
        *asyncIncrement(action, { call, put }) {//redux-saga/effects
            yield call(delay, 1000);
            yield put({ type: 'increment' });
        }
    },
    //在系统启时候会把所有的订阅函都执行一次。另外只执行一次
    subscriptions: {
        changeTitle({ history, dispatch }) {
            console.log('changeTitle');
            history.listen(({ pathname }) => {
                document.title = pathname;
            });
        }
    }
});
app.model({
    namespace: 'counter2',
    state: { number: 0 },
    reducers: {
        increment(state) {
            return { number: state.number + 1 };
        },
        decrement(state) {
            return { number: state.number - 1 };
        }
    }
});

const Counter1 = (props: Counter1Props) => (
    <div>
        <p>{props.number}</p>
        <button onClick={() => props.dispatch({ type: 'counter1/increment' })}>+</button>
        <button onClick={() => props.dispatch({ type: 'counter1/asyncIncrement' })}>asyncIncrement</button>
        <button onClick={() => props.dispatch({ type: 'counter1/decrement' })}>-</button>
    </div>
)
const mapStateToProps1 = (state: CombinedState): Counter1State => state.counter1;
const ConnectedCounter1 = connect(
    mapStateToProps1
)(Counter1);

const Counter2 = (props: Counter2Props) => (
    <div>
        <p>{props.number}</p>
        <button onClick={() => props.dispatch({ type: 'counter2/increment' })}>+</button>
        <button onClick={() => props.dispatch({ type: 'counter2/decrement' })}>-</button>
    </div>
)
const mapStateToProps2 = (state: CombinedState): Counter2State => state.counter2;
const ConnectedCounter2 = connect(
    mapStateToProps2
)(Counter2);
//Router react-router库里的Router
app.router((api?: RouterAPI) => {
    let { history, app } = api!;
    return (
        <Router history={history}>
            <>
                <Link to="/counter1">counter1</Link>
                <Link to="/counter2">counter2</Link>
                <Route path="/counter1" component={ConnectedCounter1} />
                <Route path="/counter2" component={ConnectedCounter2} />
            </>
        </Router>
    )
});
app.start('#root');
//dva没有什么功能，源码70行实就可以实现。
//只是对react redux react-redux react-router react-router-dom的一个非常轻量级封装
//umi现在越来越强大 全力开发umi