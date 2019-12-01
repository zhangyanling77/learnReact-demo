import React from 'react';
import { connect } from 'dva';
import { Route, Switch, Redirect } from 'dva/router';
import { Layout } from 'antd';
import NavBar from '../components/NavBar';
import { renderRoutes, renderRedirect } from '../utils/routes';
let { Content } = Layout;
function IndexPage(props) {
  return (
    <Layout>
      <NavBar location={props.location} />
      <Content>
        <Switch>
          {renderRoutes(props.routes, props.app)}
          {renderRedirect('/home', true, props.routes)}
        </Switch>
      </Content>
    </Layout>
  );
}


export default connect()(IndexPage);
