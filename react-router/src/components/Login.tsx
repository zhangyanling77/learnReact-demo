import React from 'react';
import { RouteComponentProps } from '../react-router-dom';
type Props = RouteComponentProps;
export default class extends React.Component<Props> {
    handleLogin = () => {
        localStorage.setItem('logined', 'true');
        if (this.props.location.state && this.props.location.state.from) {
            this.props.history.push(this.props.location.state.from);
        }
    }
    render() {
        return (
            <button
                onClick={this.handleLogin}
                className="btn btn-primary"
            >登录</button>
        )
    }
}