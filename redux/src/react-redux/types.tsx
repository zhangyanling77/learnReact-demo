import { Store } from '../redux';
export interface ContextValue {
    store: Store
}

export interface MapStateToProps<S> {
    (state: S): any
}
