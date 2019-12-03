import React, { Component, RefObject } from 'react';
import { Link, RouteComponentProps, Prompt } from '../react-router-dom';
import { User } from '../types';
import { Location } from '../history';
type Props = RouteComponentProps & {

};
interface State {
    isBlocking: boolean;//是否阻止跳转到别的路径
}
export default class extends Component<Props, State> {
    username: RefObject<HTMLInputElement>
    email: RefObject<HTMLInputElement>
    constructor(props: Props) {
        super(props);
        this.state = { isBlocking: false };
        this.username = React.createRef();
        this.email = React.createRef();
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ isBlocking: false }, () => {
            let username = this.username.current.value;
            let email = this.email.current.value;
            let usersString = localStorage.getItem('users');
            let users = usersString ? JSON.parse(usersString) : [];
            let user: User = { id: Date.now() + '', username, email };
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            this.props.history.push('/user/list');
        });
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            isBlocking: this.username.current.value.length > 0 || this.email.current.value.length > 0
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Prompt
                    when={this.state.isBlocking}
                    message={(location: Location) => `请问你是否确定要跳转到${location.pathname}吗?`}
                />
                <div className="form-group">
                    <label htmlFor="username">用户名</label>
                    <input onChange={this.handleChange} type="text" className="form-control" ref={this.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">邮箱</label>
                    <input onChange={this.handleChange} type="email" className="form-control" ref={this.email} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        )
    }

}