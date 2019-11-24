import { Action, AnyAction, ReducersMapObject, Reducer } from './';
export function combineReducers<S, A extends Action = AnyAction>(
    reducers: ReducersMapObject<S, A>
): Reducer<S, A>
export default function combineReducers<S, A extends Action = AnyAction>(
    reducers: ReducersMapObject<S, A>) {
    //返回新的合并后的reducer函数,reducer的作用就是要返回新的状态
    //state是合并后的总状态
    return function (state: S = {} as S, action: A) {
        const nextState: S = {} as S;//新的合并后的状态
        let key: keyof S;//S={counter1,counter2} counter1|counter2
        for (key in reducers) {//key=counter1
            let reducer: Reducer<S[typeof key], A> = reducers[key];//reducer=counter1
            let previousStateForKey: S[typeof key] = state[key];//这个key=counter1的老状态{number:0}  
            let nextStateForKey: S[typeof key] = reducer(previousStateForKey, action);//state[counter1] state中的counter1的分状态
            nextState[key] = nextStateForKey;
        }
        return nextState;// 返回新的合并后的状态
    }
}
    /**
* let reducers = {
counter1:counter1,
counter2:counter2
}
*/