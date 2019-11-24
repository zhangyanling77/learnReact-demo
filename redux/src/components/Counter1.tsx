import React from 'react';
import actions from '../store/actions/counter1';
import { CombinedState } from '../store/reducers';
import { Counter1State } from '../store/reducers/counter1';
import * as TYPES from '../store/action-types';
import { connect } from '../react-redux';
type Props = Counter1State & typeof actions;
class Counter1 extends React.Component<Props> {
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment1}>+</button>
                <button onClick={this.props.decrement1}>-</button>
                <button onClick={this.props.asyncIncrement1}>thunk1秒后加1</button>
                <button onClick={this.props.promiseIncrement1}>promise1秒后加1</button>
                {/* <button onClick={() => {
                    setTimeout(() => {
                        this.props.increment1();
                    }, 1000);
                }}>1秒后加1</button> */}
            </div>
        )
    }
}
//仓库中的状态对象映射为当前组件的属性对象 state.counter1 将会成为当前组件props
const mapStateToProps = (state: CombinedState): Counter1State => state.counter1;
//把dispatch方法映射为当前组件的属性对象  actions也会成为当前组件props
//const mapDispatchToProps;
//connect是一个函数，接收2个参数 mapStateToProps和actions
//返回一个新的函数，接收一个组件作为参数，最终会返回一个新的组件
//新的组件里面包含二个核心逻辑
//1.从上下文对象中拿 到store,从store中获取状态，把状态作为属性传递给Counter1
//2.输出 可以绑定actions,把绑定后的对象作为属性传递给Counter1
const mapDispatchToProps = (dispatch: any) => (
    {
        increment1: () => dispatch({ type: TYPES.INCREMENT1 }),
        decrement1: () => dispatch({ type: TYPES.DECREMENT1 })
    }
)
export default connect<any>(
    mapStateToProps,
    //mapDispatchToProps
    actions
)(Counter1);