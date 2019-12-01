import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.less';
import { Link } from 'dva/router';
let logo = require('../../assets/yay.jpg');
const { Header } = Layout;
const NavBar = (props) => {
  return (
    <Header className={styles.header}>
      <img src={logo} />
      <Menu selectedKeys={[props.location.pathname]}
        className={styles.menu} mode="horizontal">
        <Menu.Item key="/"><Link to="/" >主页</Link></Menu.Item>
        <Menu.Item key="/user"><Link to="/user" >用户管理</Link></Menu.Item>
        <Menu.Item key="/profile"><Link to="/profile" >个人中心</Link></Menu.Item>
        <Menu.Item key="/register"><Link to="/register" >注册</Link></Menu.Item>
        <Menu.Item key="/login"><Link to="/login" >登录</Link></Menu.Item>
      </Menu>
    </Header>
  );
};


export default NavBar;
