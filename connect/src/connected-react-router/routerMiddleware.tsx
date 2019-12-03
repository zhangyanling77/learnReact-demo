
import { History } from 'history';
import { CALL_HISTORY_METHOD } from './';
export default function (history: History) {
    return function (api: any) {
        return function (next: any) {
            return function (action: any) {
                
                if (action.type === CALL_HISTORY_METHOD) {
                    let method: 'push' | 'go' = action.payload.method;
                    history[method](action.payload.args[0]);
                } else {
                    next(action);
                }
            }
        }
    }
}