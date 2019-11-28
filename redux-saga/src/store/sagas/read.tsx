import { call, apply, cps } from 'redux-saga/effects';
import { delay, readFile } from '../../utils';

export function* read() {
    let school = { name: 'hello world' };
    let result = yield call([school, delay], 1000, 2000);
    //let result = yield apply(school, delay, [1000, 2000]);
    //let result = yield cps(readFile,'1.txt');
    console.log('result', result);
}