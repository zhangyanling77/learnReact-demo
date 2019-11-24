import {
    createStore, applyMiddleware, StoreEnhancer,
    StoreEnhancerStoreCreator, Store, AnyAction, MiddlewareAPI,
    Dispatch
} from '../redux';
import rootReducer, { CombinedState } from './reducers';
import *  as TYPES from '../store/action-types';

//redux-logger
//如何定一个专业的中间件 
let logger = function (api: MiddlewareAPI) {//api
    return function (next: Dispatch<AnyAction>) {//下一个中间件
        //以后再调用store.dispatch调用就是这个函数
        return function (action: any) {//派发的动作
            console.log('变更前的老状态1', api.getState());//store.dispatch
            next(action);//调用下一个中间件
            console.log('变更后的新状态1', api.getState());
        }
    }
}
//redux-thunk 可以让我们派发一个函数
let thunk = function (api: MiddlewareAPI) {//api
    return function (next: Dispatch<AnyAction>) {//下一个中间件
        //以后再调用store.dispatch调用就是这个函数
        return function (action: any) {//派发的动作
            //如果action是一个函数，则可以让函数执行
            if (typeof action === 'function') {
                return action(api.dispatch, api.getState);
            }
            //如果说不是一个函数,则可以直接调用下一步
            return next(action);//store.dispatch只能接收普通的对象action
        }
    }
}
//判断一个对象是不是promise obj存在并且是一个对象，obj.then是一个函数
function isPromise(obj: any) {
    return !!obj && (typeof obj === 'object') && typeof obj.then === 'function'
}
/* let promise = function (api: MiddlewareAPI) {//api
    return function (next: Dispatch<AnyAction>) {//下一个中间件
        //以后再调用store.dispatch调用就是这个函数
        return function (action: any) {//派发的动作
            if (isPromise(action)) {
                action.then(function (result: any) {
                    api.dispatch(result);
                });
            } else {
                next(action);
            }
        }
    }
} */
let promise = function (api: MiddlewareAPI) {//api
    return function (next: Dispatch<AnyAction>) {//下一个中间件
        //以后再调用store.dispatch调用就是这个函数
        return function (action: any) {//派发的动作
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
//如果有中间件的话，创建仓库要经过三步
let storeEnhancer: StoreEnhancer = applyMiddleware<{}, CombinedState>(thunk, promise, logger);//返回一个Store的增强器
let storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(createStore);//返回一个增强后的createStore方法
let store: Store<CombinedState> = storeEnhancerStoreCreator<CombinedState, AnyAction>(rootReducer);//返回仓库
//const store = createStore(rootReducer);
export default store;