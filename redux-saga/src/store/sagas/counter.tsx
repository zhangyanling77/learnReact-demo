import * as types from '../action-types';
import { delay, take, takeEvery, put, all } from 'redux-saga/effects'

export function delay1(this: any, ms: number, ms2: number) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let number = Math.random();
            if (number > .5) {
                resolve(number);
            } else {
                reject('出错了');
            }
        }, ms + ms2);
    });
}
export function* incrementAsync1() {
    try {
        yield delay1(1000, 100);
        yield put({ type: types.INCREMENT });
    } catch (error) {
        console.log('error', error);
        alert(error);
    }

}

export function delay2(this: any, ms: number, ms2: number) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let number = Math.random();
            if (number > .5) {
                resolve({ data: number, code: 0 });
            } else {
                resolve({ data: '发生错误', code: 1 });
            }
        }, ms + ms2);
    });
}
export function* incrementAsync2() {
    let result = yield delay2(1000, 100);
    let { data, code } = result;
    if (code == 0) {
        yield put({ type: types.INCREMENT });
    } else {
        alert(data);
    }
}
export function* watchAsyncIncrement() {
    yield takeEvery(types.ASYNC_INCREMENT, incrementAsync2);
}