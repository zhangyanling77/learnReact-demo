
import { StoreCreator, Action, Reducer, Store, Dispatch, Listener, Subscribe, Unsubscribe } from './';
//Generic type 'StoreCreator' requires 4 type argument(s).
const createStore: StoreCreator = <S, A extends Action, Ext, StateExt>(
    reducer: Reducer<S, A>, preloadedState?: S
): Store<S, A> => {
    let currentState: S = preloadedState as S;
    let currentListeners: Array<Listener> = [];//这里存放着所有的监听函数
    function getState(): S {
        return currentState;
    }
    const dispatch: Dispatch<A> = <T extends A>(action: T): T => {
        currentState = reducer(currentState, action);
        currentListeners.forEach(l => l());
        return action;//这一步非常重要
    }
    dispatch({ type: '@@REDUX/INIT' } as A);
    const subscribe: Subscribe = (listener: Listener): Unsubscribe => {
        currentListeners.push(listener);
        return function () {
            let index: number = currentListeners.indexOf(listener);
            currentListeners.splice(index, 1);//从index的位置开始删除，删除1个
        }
    }
    const store: Store<S, A> = {
        getState,
        dispatch,
        subscribe
    }
    return store;
}

export default createStore;