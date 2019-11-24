import * as TYPES from '../action-types';
import { Dispatch } from '../../redux';
import { reject } from 'q';
//这是一个对象，每个属性都是一个actionCreator.
//这个对象被称为actionCreators
let actions = {
    //actionCreator action创建器
    increment1() {
        return { type: TYPES.INCREMENT1 };
    },
    asyncIncrement1() {
        //在这个地方，派发的是一个函数
        return function (dispatch: Dispatch, getState: any) {
            setTimeout(() => {
                dispatch({ type: TYPES.INCREMENT1 });
            }, 1000);
        }
    },
    promiseIncrement1() {
        //这种写法只能处理成功的情况
        /* return new Promise(function (resolve) {
            setTimeout(() => {
                //1秒后resolve出来一个普通的action对象
                resolve({ type: TYPES.INCREMENT1 });
            }, 1000);
        }) */
        return {
            type: TYPES.INCREMENT1,
            payload: new Promise(function (resolve, reject) {
                setTimeout(() => {
                    let result = Math.random();
                    if (result >= .5) {
                        resolve(result);//成功态 resolve数字
                    } else {
                        reject('出错了');//失败态 reject出来一个数字
                    }
                }, 1000);
            })
        }
    },
    decrement1() {
        return { type: TYPES.DECREMENT1 };
    }
}
// actionCreatorMapObject
export default actions;

//bindActionCreator 会进行绑定
/* asyncIncrement1() {
    store.dispatch(undifined);
}, */