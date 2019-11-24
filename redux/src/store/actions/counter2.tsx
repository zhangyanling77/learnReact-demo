import * as TYPES from '../action-types';

let actions = {
    increment2() {
        return { type: TYPES.INCREMENT2 };
    },
    decrement2() {
        return { type: TYPES.DECREMENT2 };
    }
}
export default actions;