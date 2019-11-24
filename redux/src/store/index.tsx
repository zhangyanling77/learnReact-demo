import {
    createStore, applyMiddleware, StoreEnhancer,
    StoreEnhancerStoreCreator, Store, AnyAction, MiddlewareAPI,
    Dispatch
} from '../redux';
import rootReducer, { CombinedState } from './reducers';


let logger = function (api: MiddlewareAPI) {
    return function (next: Dispatch<AnyAction>) {
    
        return function (action: any) {
            console.log('变更前的老状态1', api.getState());
            next(action);//调用下一个中间件
            console.log('变更后的新状态1', api.getState());
        }
    }
}

let thunk = function (api: MiddlewareAPI) {
    return function (next: Dispatch<AnyAction>) {
        
        return function (action: any) {
            if (typeof action === 'function') {
                return action(api.dispatch, api.getState);
            }
            
            return next(action);
        }
    }
}

function isPromise(obj: any) {
    return !!obj && (typeof obj === 'object') && typeof obj.then === 'function'
}

let promise = function (api: MiddlewareAPI) {
    return function (next: Dispatch<AnyAction>) {
        
        return function (action: any) {
            return isPromise(action.payload) ? action.payload.then(
                (result: any) => api.dispatch({ ...action, payload: result }),
                (error: any) => {
                    api.dispatch({ ...action, payload: error, error: true });
                    return Promise.reject(error);
                }
            ) : next(action)
        }
    }
}

let storeEnhancer: StoreEnhancer = applyMiddleware<{}, CombinedState>(thunk, promise, logger);
let storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(createStore);
let store: Store<CombinedState> = storeEnhancerStoreCreator<CombinedState, AnyAction>(rootReducer);

export default store;