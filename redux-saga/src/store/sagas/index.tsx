import { all } from 'redux-saga/effects'
import { watchIncrementAsync, watchAndLog } from './take';

export default function* rootSaga() {
    yield all([watchIncrementAsync(), watchAndLog()]);
}