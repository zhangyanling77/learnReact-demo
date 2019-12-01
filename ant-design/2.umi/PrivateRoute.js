import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//render方法 others放着其它的参数，组成一个对象
export default ({ render, ...rest }) => {
    //render是一个渲染方法，用来渲染真正的组件profile
    console.log('render', render);

    return (
        <Route
            render={
                routeProps => {
                    return localStorage.getItem('login') ? render() :
                        <Redirect to={{ pathname: "/login", state: { from: routeProps.location.pathname } }} />;
                }
            }
        />
    )
}