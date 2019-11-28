import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
type Props = RouteComponentProps;
export default class Home extends React.Component<Props> {
    render() {
        return (
            <div>
                <p>HOME</p>
                <button onClick={() => this.props.history.push('/counter')}>/counter</button>
                <Link to="/counter">/counter</Link>
            </div>
        )
    }
}
