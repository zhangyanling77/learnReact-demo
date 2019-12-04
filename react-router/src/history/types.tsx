import { Message } from '../react-router-dom';
export type LocationState = any;
export interface Location<S = LocationState> {
    pathname: string;
    state?: S;
}
// 跳转路径传的可能是一个字符串'/pathname'，也可能是一个对象{ pathname,state }
export type LocationDescriptor = string | Location;

export interface History {
    push(to: LocationDescriptor): void;
    block: (message: Message | null) => void;
    message?: Message | null;
}
