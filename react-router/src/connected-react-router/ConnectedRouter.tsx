import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { Router } from 'react-router';
import { History, Location, UnregisterCallback } from 'history';
import { LOCATION_CHANGE, Action } from './';

interface Props {
    history: History
}
export default class ConnectedRouter extends React.Component<Props> {
    static contextType = ReactReduxContext;
    unListen: UnregisterCallback
    componentDidMount() {
        
        this.unListen = this.props.history.listen((location: Location, action: Action) => {
            this.context.store.dispatch({
                type: LOCATION_CHANGE,
                payload: {
                    location,
                    action
                }
            })
        });
    }
    componentWillUnmount() {
        this.unListen();
    }
    render() {
        let { history, children } = this.props;
        return (
            <Router history={history}>
                {children}
            </Router>
        )
    }
}