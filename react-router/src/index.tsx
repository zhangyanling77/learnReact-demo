import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, MenuLink } from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Protected from './components/Protected';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import NavHeader from './components/NavHeader';
let root: HTMLDivElement = document.getElementById('root') as HTMLDivElement;
/**
 * 路由容器是放在最外面 Router有且只能有一个子组件
 */
ReactDOM.render(
    <Router>
        <>
            <div className="navbar navbar-inverse">
                <div className="container-fluid">
                    <NavHeader title="珠峰架构" />
                    <ul className="nav navbar-nav">
                        <li><MenuLink to="/" exact={true} >Home</MenuLink></li>
                        <li><MenuLink to="/user" >User</MenuLink></li>
                        <li><MenuLink to="/profile" >Profile</MenuLink></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Switch>
                            <Route path="/" component={Home} exact={true} />
                            <Route path="/user" component={User} />
                            <Protected path="/profile" component={Profile} />
                            <Route path="/login" component={Login} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    </Router>, root
);
