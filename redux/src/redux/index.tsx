import createStore from './createStore';
import bindActionCreators from './bindActionCreators';
import combineReducers from './combineReducers';
import applyMiddleware from './applyMiddleware';
export {
    createStore,
    bindActionCreators,
    combineReducers,
    applyMiddleware
}
export * from './types';

//为什么要加个?不管是哪个文件导出的类型，我们一律改由索引index.tsx进行导出
export * from './bindActionCreators';