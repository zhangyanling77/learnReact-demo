import React from 'react';
import { connect } from 'react-redux';
import { CounterState } from '../store/reducer';
import actions from '../store/actions';
type Props = CounterState & typeof actions;
class Counter extends React.Component<Props> {
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.asyncIncrement}>异步+1</button>
            </div>
        )
    }
}
const mapStateToProps = (state: CounterState): CounterState => state;
export default connect(
    mapStateToProps,
    actions
)(Counter);