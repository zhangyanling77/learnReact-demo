import React from 'react';
import ReactDOM from 'react-dom';
//每个组件都有自己的状态和action type
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import { Provider } from './react-redux';
import store from './store';
//Provider 是一个组件，负责通过context上下文向下层组件传递仓库store
ReactDOM.render(<Provider store={store}>
    <Counter1 />
    <hr />
    <Counter2 />
</Provider>, document.getElementById('root'));