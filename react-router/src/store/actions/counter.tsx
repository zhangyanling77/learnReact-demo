import * as types from '../action-types';
import { push } from '../../connected-react-router';
export default {
    increment() {
        return { type: types.INCREMENT };
    },
    goto(path: string) {
        
        return push({ pathname: path });
    }
}