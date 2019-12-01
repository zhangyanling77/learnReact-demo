import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
console.log(styles);

ReactDOM.render(<h1 className={styles.box}>hello</h1>, document.getElementById('root'));