import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'umi/link';
export default class Layout extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">UMI</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/user/list">用户管理</Link></li>
                            <li><Link to="/profile">个人中心</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}