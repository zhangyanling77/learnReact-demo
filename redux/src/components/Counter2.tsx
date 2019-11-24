import React from 'react';
import actions from '../store/actions/counter2';
import { CombinedState } from '../store/reducers';
import { Counter2State } from '../store/reducers/counter2';
import { connect } from '../react-redux';
type Props = Counter2State & typeof actions;
class Counter2 extends React.Component<Props> {
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment2}>+</button>
                <button onClick={this.props.decrement2}>-</button>
            </div>
        )
    }
}
//仓库中的状态对象映射为当前组件的属性对象 state.counter1 将会成为当前组件props
const mapStateToProps = (state: CombinedState): Counter2State => state.counter2;
//把dispatch方法映射为当前组件的属性对象  actions也会成为当前组件props
//const mapDispatchToProps;
export default connect(
    mapStateToProps,
    actions
)(Counter2);