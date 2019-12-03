import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Counter from './components/Counter';
import store from './store';
import { ConnectedRouter } from './connected-react-router';
import history from './history';
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" exact component={Home} />
            <Route path="/counter" exact component={Counter} />
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);