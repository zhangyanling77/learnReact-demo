
import { Reducer, AnyAction } from '../../redux';
import * as TYPES from '../action-types';
export interface Counter2State {
    number: number
}

let initialState: Counter2State = { number: 0 };
const reducer: Reducer<Counter2State, AnyAction> = (state: Counter2State = initialState, action: AnyAction): Counter2State => {
    switch (action.type) {
        case TYPES.INCREMENT2:
            return { number: state.number + 1 };
        case TYPES.DECREMENT2:
            return { number: state.number - 1 };
        default:
            return state;
    }
}
export default reducer;