import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux';
import counter1, { Counter1State } from './counter1';
import counter2, { Counter2State } from './counter2';
import user, { UserState } from './user';
import { connectRouter, RouterState } from 'connected-react-router';
import history from '../../history';

export interface CombinedState {
    counter1: Counter1State,
    counter2: Counter2State,
    router: RouterState,
    user: UserState
}
let reducers: ReducersMapObject<CombinedState, any> = {
    counter1,
    counter2,
    router: connectRouter(history),
    user
}

let reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers);
export default reducer;