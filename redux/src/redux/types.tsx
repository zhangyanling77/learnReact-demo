//任何的Action都必须有一个属性type type的类型就是T=any
export interface Action<T = any> {
    type: T
}
//代表任意的action 只要有type属性，其它属性随便给
export interface AnyAction extends Action {
    [extraProps: string]: any
}
//reducer是一个处理函数，接收老的状态和action动作，返回新的状态
/* export interface Reducer1<S = any, A extends Action = AnyAction> {
    (state: S | undefined, action: A): S
} */
export type Reducer<S = any, A extends Action = AnyAction> = (
    state: S | undefined, action: A) => S;
//特别强调 dispatch方法返回值 就是派发的动作action
//export type Dispatch<A extends Action = AnyAction> = (action: A) => A;
export type Dispatch<A = AnyAction> = <T extends A>(action: T) => T;
export type Subscribe = (listener: Listener) => Unsubscribe;
export type Unsubscribe = () => void;
//监听函数是没有参数，也没返回值
export type Listener = () => void;
export interface Store<S = any, A extends Action = AnyAction> {
    dispatch: Dispatch<A>,//派发动作 改变仓库中的状态
    getState(): S,//获取当前状态
    //订阅的时候传入一个状态变更监听函数，返回一个取消订阅的函数
    subscribe(listener: Listener): Unsubscribe//订阅仓库中的状态变化事件
}
/**
 * S State代表本仓库管理的状态的类型
 * A Action代表向本仓库派发的动作的类型
 * createStore:StoreCreator(reducer,preloadedState)=Store
 */
//Required type parameters may not follow optional type parameters.
//必选的参数不能跟在可选的参数后面
//S代表仓库中的状态 A代表向仓库派发的动作
/* export interface StoreCreator {
    <S, A extends Action<any>, Ext, StateExt>(
        reducer: Reducer<S, A>,
        preloadedState?: S
    ): Store<S, A>
} */

export type StoreCreator = <S, A extends Action<any>, Ext, StateExt>  (
    reducer: Reducer<S, A>,
    preloadedState?: S
) => Store<S, A>

/**
 * interface CombinedState {
  counter1: Counter1State,
  counter2: Counter2State
  }
  counter1|counter2
 */
export type ReducersMapObject<S = any, A extends Action = Action> = {
    [K in keyof S]: Reducer<S[K], A>
}
export interface Middleware<
    DispatchExt = {},
    S = any,// 代表本仓库管理的状态
    D extends Dispatch = Dispatch//代表派发的广场 Action=AnyAction
    > {
    (api: MiddlewareAPI<D, S>): (
        next: Dispatch<AnyAction>
    ) => (action: any) => any
}
export interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
    dispatch: D
    getState(): S
}
export type StoreEnhancer = (
    next: StoreEnhancerStoreCreator
) => StoreEnhancerStoreCreator

export type StoreEnhancerStoreCreator = <
    S = any,
    A extends Action = AnyAction
    >(
    reducer: Reducer<S, A>,
    preloadedState?: S
) => Store<S, A>