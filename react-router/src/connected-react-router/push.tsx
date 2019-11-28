import { LocationState, Path, LocationDescriptorObject } from 'history';
import { CALL_HISTORY_METHOD, CallHistoryMethodAction } from './';
export default function push<S = LocationState>(location: LocationDescriptorObject<S>): CallHistoryMethodAction<[LocationDescriptorObject<S>]>;
export default function push<S = LocationState>(location: LocationDescriptorObject<S>): CallHistoryMethodAction<[LocationDescriptorObject<S>]> {
    return {
        type: CALL_HISTORY_METHOD,
        payload: {
            method: 'push',
            args: [location]
        }
    }
}