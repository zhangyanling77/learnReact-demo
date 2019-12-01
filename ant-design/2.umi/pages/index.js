import React from 'react';
import styles from './index.css';
import { Link } from 'react-router-dom';//react-router-dom
export default function () {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Link to="/profile">/profile</Link>
    </div>
  );
}
