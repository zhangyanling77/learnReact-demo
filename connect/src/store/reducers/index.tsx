import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';
import { connectRouter, RouterState } from '../../connected-react-router';
import history from '../../history';
import { LocationState } from 'history';
export interface CombineState {
    counter: CounterState,
    router: RouterState<LocationState>
}
let reducers = {
    counter,
    router: connectRouter<LocationState>(history)
}
let rootReducer = combineReducers(reducers);
export default rootReducer;