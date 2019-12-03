import React from 'react';
import { LocationDescriptor } from '../history';
import RouterContext from './context';
type LinkProps = React.PropsWithChildren<{
    to: LocationDescriptor;
}>;
export default class extends React.Component<LinkProps> {
    static contextType = RouterContext;
    //history.push('/user');
    render() {
        return (
            <a {...this.props}
                onClick={() => this.context.history.push(this.props.to)} >{this.props.children}</a>
        )
    }
}