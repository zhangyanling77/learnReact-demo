import React from 'react';
import { RouteComponentProps } from '../react-router-dom';
import { withRouter } from '../react-router-dom';

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
