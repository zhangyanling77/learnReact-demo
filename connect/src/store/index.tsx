import { createStore, applyMiddleware, Store } from 'redux';
import rootReducer from './reducers';
import { routerMiddleware } from '../connected-react-router';
import history from '../history';

let store = applyMiddleware(routerMiddleware(history))(createStore)(rootReducer);
declare global {
    interface Window {
        store: Store
    }
}

window.store = store;
export default store;
