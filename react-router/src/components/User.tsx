import React from 'react';
import { Link, Route, RouteComponentProps } from '../react-router-dom';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';
//如果说一个组件是通过路由渲染出来的，那么它的属性对象是这样的定义的
type Props = RouteComponentProps & {

}
export default class extends React.Component<Props> {
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <ul className="nav nav-stack">
                        <li><Link to="/user/list">用户列表</Link></li>
                        <li><Link to="/user/add">添加用户</Link></li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <Route path="/user/list" component={UserList} />
                    <Route path="/user/add" component={UserAdd} />
                    <Route path="/user/detail/:id" component={UserDetail} />
                </div>
            </div>
        )
    }
}
/**
路径组件属性类型 接口
history 可以跳转路径 push go back
location 代表当前路径 pathname state 状态对象
match 匹配，只有路里有路径参数的时候会有 params  path====url isExact=true
export interface RouteComponentProps<
    Params  = {}, //路径参数 express koa angular vue 也都有路径参数  /detail/:id /detail/1 {id:1}
    C extends StaticContext = StaticContext,//服务器端渲染的明智的
    S = H.LocationState
> {
    history: H.History; 历史对象
    location: H.Location<S>;当前路径
    match: match<Params>; 路径参数参数
}
 */