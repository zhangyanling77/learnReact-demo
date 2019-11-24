
//actions={increment(){return {type:'INCREMENT'}},decrement(){return {type:'DECREMENT'}}}
//boundActions={increment(){return dispatch({type:'INCREMENT'})},
//decrement(){return dispatch({type:'DECREMENT'}}}}
import { Action, AnyAction, Dispatch } from './';
export interface ActionCreator<A = AnyAction> {
    (...args: Array<any>): A
}
export interface ActionCreatorsMapObject<A = AnyAction> {
    [key: string]: ActionCreator<A>
}
export default function bindActionCreators<A,
    M extends ActionCreatorsMapObject<A>
>(actionCreators: M, dispatch: Dispatch<A>) {
    let boundActionCreators: ActionCreatorsMapObject<A> = {};///[propName:string]:any
    for (const key in actionCreators) {
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator<A>(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}
//绑的是一个actionCreator
function bindActionCreator<A>(actionCreator: ActionCreator<A>, dispatch: Dispatch<A>): any {
    return function (this: any, ...args: Array<any>) {
        return dispatch(actionCreator.apply(this, args));
    }
}