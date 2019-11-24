
import { Reducer, AnyAction } from '../../redux';
import * as TYPES from '../action-types';
export interface Counter1State {
    number: number
}

let initialState: Counter1State = { number: 0 };
const reducer: Reducer<Counter1State, AnyAction> = (state: Counter1State = initialState, action: AnyAction): Counter1State => {
    switch (action.type) {
        case TYPES.INCREMENT1:
            console.log(action);

            if (action.error) {
                alert(action.payload);
                return state;
            }
            return { number: state.number + 1 };
        case TYPES.DECREMENT1:
            return { number: state.number - 1 };
        default:
            return state;
    }
}
export default reducer;