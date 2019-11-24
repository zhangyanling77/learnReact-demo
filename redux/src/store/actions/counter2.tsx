import * as TYPES from '../action-types';
//这是一个对象，每个属性都是一个actionCreator.
//这个对象被称为actionCreators
let actions = {
    increment2() {
        return { type: TYPES.INCREMENT2 };
    },
    decrement2() {
        return { type: TYPES.DECREMENT2 };
    }
}
export default actions;