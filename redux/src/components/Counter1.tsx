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
            </div>
        )
    }
}

const mapStateToProps = (state: CombinedState): Counter1State => state.counter1;

const mapDispatchToProps = (dispatch: any) => (
    {
        increment1: () => dispatch({ type: TYPES.INCREMENT1 }),
        decrement1: () => dispatch({ type: TYPES.DECREMENT1 })
    }
)
export default connect<any>(
    mapStateToProps,
    // mapDispatchToProps,
    actions
)(Counter1);