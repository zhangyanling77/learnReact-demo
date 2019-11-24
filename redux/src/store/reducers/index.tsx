
import { combineReducers, AnyAction, ReducersMapObject, Reducer } from '../../redux';
import counter1, { Counter1State } from './counter1';
import counter2, { Counter2State } from './counter2';

export interface CombinedState {
  counter1: Counter1State,
  counter2: Counter2State
}

let reducers: ReducersMapObject<CombinedState, AnyAction> = {
  counter1,
  counter2
}

let rootReducer: Reducer<CombinedState, AnyAction> = combineReducers<CombinedState, AnyAction>(reducers);

export default rootReducer;
