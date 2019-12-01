import React from 'react';
export default class UerDetail extends React.Component {
    render() {
        let user = this.props.location.state || {};

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    ID:{user.id}
                    姓名:{user.name}
                </div>
            </div>
        )
    }
}