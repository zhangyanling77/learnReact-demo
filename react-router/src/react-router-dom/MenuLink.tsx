import React, { ReactNode } from 'react';
import { Route, Link } from './';
import { LocationDescriptor } from '../history';
import './MenuLink.css'

interface Props {
    to: LocationDescriptor;
    exact?: boolean;
    children?: ReactNode
}
// 会判断地址栏中的路径和to里的路径是否匹配，如果相等，会给Link组件添加一个active的类名
export default (props: Props) => {
    let { to, exact, children } = props;
    return (
        <Route
            path={to}
            exact={exact}
            children={
                (childrenProps: any) => (
                    <Link className={childrenProps.match ? 'active' : ''}
                        to={to} {...childrenProps}>{children}</Link>
                )
            }
        />
    )
}
/**
 * 渲染Route有三种方式
 * component 匹配上渲染，不匹配不渲染
 * render 匹配上渲染，不匹配不渲染
 * children 不管是否匹配都渲染
 */
