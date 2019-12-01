import React from 'react';
export default class UserAdd extends React.Component {
    render() {
        return (
            <form>
                用户名 <input className="form-control" /><br />
                密码 <input className="form-control" /><br />
                <input type="submit" className="btn btn-primary" />
            </form>
        )
    }
}