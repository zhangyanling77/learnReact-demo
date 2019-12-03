import React from 'react';
import { Route, RouteComponentProps } from './';
export default function <NavHeaderProps>(OldComponent: React.ComponentType<NavHeaderProps & RouteComponentProps>) {
    return (props: NavHeaderProps) => (
        <Route render={
            (routeProps: RouteComponentProps) => <OldComponent {...props} {...routeProps} />
        } />
    )
}