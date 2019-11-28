import { AnyAction } from 'redux';
export interface CounterState {
    number: number
}
let initialState: CounterState = { number: 0 };
export default function (state: CounterState = initialState, action: AnyAction): CounterState {
    return state;
}