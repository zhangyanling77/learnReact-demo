import React from 'react';
export default function (props) {
  return (
    <form>
      用户名 <input className="form-control" />
      <input className="btn btn-primary" type="button" onClick={() => {
        localStorage.setItem('login', 'true');
        props.history.push(props.location.state.from);
      }} value="登录" />
    </form>
  );
}
