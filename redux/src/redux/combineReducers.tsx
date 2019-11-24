import { Action, AnyAction, ReducersMapObject, Reducer } from './';
export function combineReducers<S, A extends Action = AnyAction>(
    reducers: ReducersMapObject<S, A>
): Reducer<S, A>
export default function combineReducers<S, A extends Action = AnyAction>(
    reducers: ReducersMapObject<S, A>) {
    
    return function (state: S = {} as S, action: A) {
        const nextState: S = {} as S;
        let key: keyof S;
        for (key in reducers) {
            let reducer: Reducer<S[typeof key], A> = reducers[key];
            let previousStateForKey: S[typeof key] = state[key]; 
            let nextStateForKey: S[typeof key] = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
        }
        return nextState;
    }
}
