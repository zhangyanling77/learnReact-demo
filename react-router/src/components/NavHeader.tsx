import React from 'react';
import { RouteComponentProps } from '../react-router-dom';
import { withRouter } from '../react-router-dom';
//只有当一个组件是通过路由Route渲染出来的话才会有RouteComponentProps里的属性
interface NavHeaderProps {
    title: string;
}

class NavHeader extends React.Component<RouteComponentProps & NavHeaderProps> {
    render() {
        return (
            <div className="navbar-header">
                <div
                    onClick={(event: React.MouseEvent) => this.props.history.push('/')}
                    className="navbar-brand">{this.props.title}</div>
            </div>
        )
    }
}
export default withRouter<NavHeaderProps>(NavHeader);