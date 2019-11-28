import * as types from '../action-types';
import { delay, take, takeEvery, put, all, select } from 'redux-saga/effects';
/

export function* watchIncrementAsync() {
    for (let i = 0; i < 3; i++) {
        let action = yield take(types.ASYNC_INCREMENT);

        yield put({ type: types.INCREMENT });
    }
    alert('已经达到了最大值3');
}

export function* watchAndLog() {
    
    while (true) {
        let action = yield take('*');
        console.log(action);
        let state = yield select(state => state.number);
        console.log('state', state);
    }
}