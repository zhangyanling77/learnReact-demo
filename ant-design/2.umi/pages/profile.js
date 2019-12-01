/**
 * title: 个人中心
 * Routes:
 *   - ./PrivateRoute.js
 */
import React from 'react';
import styles from './profile.css';
import history from '../src/history';
export default function () {
  return (
    <div className={styles.normal}>
      <h1>Page profile</h1>
      <button onClick={() => history.goBack()}>返回</button>
    </div>
  );
}
