//在这里把2个reducer合并成同一个reducer
import { combineReducers, AnyAction, ReducersMapObject, Reducer } from '../../redux';
import counter1, { Counter1State } from './counter1';
import counter2, { Counter2State } from './counter2';
//这个就是合并后的状态类型定义
export interface CombinedState {
  counter1: Counter1State,
  counter2: Counter2State
}
//这个就是一个ReducersMapObject类型，是一个对象key是字符串，值是一个reducer
/* export type ReducersMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: Reducer<S[K], A>
} */
let reducers: ReducersMapObject<CombinedState, AnyAction> = {
  counter1,
  counter2
}
//把两个reducer合并成了一个reducer
let rootReducer: Reducer<CombinedState, AnyAction> = combineReducers<CombinedState, AnyAction>(reducers);
//如果把两个reducer进行了合并。那么最终返回的reducer的状态就会是两个reducer
//维护的状态的合

export default rootReducer;
/**
 * counter1 {number:0}
 * counter2 {number:0}
 * 合并后的状态
 * store.getState();
 * {
    counter1:{number:0},
    counter2:{number:0}
   }
 */