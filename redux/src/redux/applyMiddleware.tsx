import compose from './compose';
import { Middleware, Store, MiddlewareAPI, Action, Dispatch, StoreEnhancer, StoreCreator, Reducer } from './';
import { AnyAction } from './types';
export function applyMiddleware<Ext, S = any>(
    ...middlewares: Middleware<any, S, any>[]
): StoreEnhancer
export default function applyMiddleware<Ext, S>(
    ...middlewares: Middleware<any, S, any>[]
): StoreEnhancer {
    return (createStore: StoreCreator) => <S, A extends Action>(
        reducer: Reducer<S, A>): Store<S, A> => {
        //'AnyAction' is assignable to the constraint of type 'A'
        // Store<S, A>  dispatch: Dispatch<A>=><T extends A>(action: T) => T
        let store = createStore(reducer);
        let dispatch: Dispatch<AnyAction>;//=><T extends AnyAction>(action: T) => T
        const middlewareAPI: MiddlewareAPI<Dispatch, S> = {
            getState: store.getState,
            dispatch: (action) => dispatch(action)
        }
        const chain = middlewares.map((middleware: any) => middleware(middlewareAPI));
        dispatch = compose(...chain)(store.dispatch);
        return {
            ...store,
            dispatch
        };
    }
}
/**
 * applyMiddleware
 * StoreEnhancer 是用来接收中间件的函数,返回一个可以增强createStore方法
 *  StoreEnhancerStoreCreator  reducer=>store
 * StoreEnhancer=>StoreEnhancerStoreCreator=>store
 *
 */
