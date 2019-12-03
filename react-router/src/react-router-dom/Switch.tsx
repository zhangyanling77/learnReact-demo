import React, { ReactElement } from 'react';
import RouterContext from './context';
import { pathToRegexp, Key } from 'path-to-regexp';
//ReactElement= {type,props,key}
interface Props {
    children: Array<ReactElement>
}
export default class extends React.Component<Props> {
    static contextType = RouterContext;
    render() {
        //1.取到它的三个儿子，然后用当前路径和三个儿子一一匹配，如果匹配上了一个，就直接 返回了，后面就不再匹配了
        let pathname = this.context.location.pathname;
        if (this.props.children) {
            for (let i = 0; i < this.props.children.length; i++) {
                let child: ReactElement = this.props.children[i];
                let { path = "/", exact = false, component: RouteComponent } = child.props;
                let keys: Array<Key> = [];
                let regexp = pathToRegexp(path, keys, { end: exact });
                let result = pathname.match(regexp);
                if (result) {
                    return child;
                }
            }
        }
        return null;
    }
}
/**
 *梳理一下React中元素的类型
 * React.React.Element
 * {type,props,key}
 * type 表示元素的类型 可能是字符串(div),
 *     也可能是一个类(类组件)
 *     也可能是一个函数(函数组件)
 * ReactNode 是一种更加宽泛的类型，其中是包括ReactElement
 */