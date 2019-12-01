import React from 'react';
import { Link } from 'react-router-dom';
export default class User extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <ul className="nav nav-stacked">
                        <li><Link to="/user/list">用户列表</Link></li>
                        <li><Link to="/user/add">添加用户</Link></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    {this.props.children}
                </div>
            </div>
        )
    }
}