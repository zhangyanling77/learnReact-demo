import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import routeConfig from './routeConfig';
//此方法就是用来把一个路径对象的数组映射转换成React组件的数组
import { renderRoutes } from './utils/routes';
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {renderRoutes(routeConfig, app)}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
