import React, { ComponentType } from 'react';
import { Route, Redirect, RouteComponentProps } from '../react-router-dom';

interface Props {
    path: string;
    component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}

export default (props: Props) => {
    let { path, component: RouteComponent } = props;
    return (
        <Route path={path} render={
            (renderProps: any) => localStorage.getItem('logined') ?
                <RouteComponent {...renderProps} /> : <Redirect to={{ pathname: '/login', state: { from: renderProps.location.pathname } }} />
        } />
    )
}
