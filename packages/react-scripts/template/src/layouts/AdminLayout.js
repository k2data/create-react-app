import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import styles from './AdminLayout.css';

const { Header, Footer, Sider, Content } = Layout;

class AdminLayout extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className={styles.layout}>
        <Sider
          className={styles.sider}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}>
            {this.state.collapsed ? (
              <div style={{ textAlign: 'center' }}>React</div>
            ) : (
              'LOGO: React'
            )}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className={styles.content}>Content</Content>
          <Footer className={styles.footer}>k2 create react app fork</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default AdminLayout;
