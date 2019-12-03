import React from 'react';
import { connect } from 'react-redux';
import { CounterState } from '../store/reducers/counter';
import { CombineState } from '../store/reducers';
import actions from '../store/actions/counter';
import { RouteComponentProps } from 'react-router-dom';
type Props = RouteComponentProps & typeof actions & CounterState;

class Counter extends React.Component<Props> {
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={() => this.props.goto('/')}>跳到/home</button>
            </div>
        )
    }
}
let mapStateToProps = (state: CombineState): CounterState => state.counter
export default connect(
    mapStateToProps,
    actions
)(Counter);