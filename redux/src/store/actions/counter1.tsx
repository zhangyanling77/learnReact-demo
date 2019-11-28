import * as TYPES from '../action-types';
import { Dispatch } from '../../redux';

let actions = {
    increment1() {
        return { type: TYPES.INCREMENT1 };
    },
    asyncIncrement1() {
        return function (dispatch: Dispatch, getState: any) {
            setTimeout(() => {
                dispatch({ type: TYPES.INCREMENT1 });
            }, 1000);
        }
    },
    promiseIncrement1() {
        return {
            type: TYPES.INCREMENT1,
            payload: new Promise(function (resolve, reject) {
                setTimeout(() => {
                    let result = Math.random();
                    if (result >= .5) {
                        resolve(result);
                    } else {
                        reject('出错了');
                    }
                }, 1000);
            })
        }
    },
    decrement1() {
        return { type: TYPES.DECREMENT1 };
    }
}

export default actions;
