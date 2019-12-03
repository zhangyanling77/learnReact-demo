import React, { Component } from 'react';
import { Link } from '../react-router-dom';
import { User } from '../types';
interface Props { }

interface State {
    users: Array<User>
}
export default class extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { users: [] };
    }
    componentDidMount() {
        let usersString = localStorage.getItem('users');
        let users = usersString ? JSON.parse(usersString) : [];
        this.setState({ users });
    }
    render() {
        return (
            <ul className="list-group">
                {
                    this.state.users.map((user: User, index: number) => (
                        <li className="list-group-item" key={index}>
                            <Link to={{ pathname: `/user/detail/${user.id}`, state: user }}>{user.username}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }

}