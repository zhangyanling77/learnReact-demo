import React from 'react';
import RouterContext from './context';
import { Location } from '../history';
export interface Message {
    (location: Location): string;
}
interface Props {
    when: boolean;
    message: Message;
}
export default class extends React.Component<Props> {
    static contextType = RouterContext;
    render() {
        const { when, message } = this.props;
        //每次渲染的渲染的时候会判断when是true还是false
        if (when) {
            this.context.history.block(message);
        } else {
            this.context.history.block(null);
        }
        return null as any;
    }
}