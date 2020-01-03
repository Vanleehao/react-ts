import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class Saidbar extends React.Component<any, any> {

  public render() {
    return (
      <Menu 
        theme="dark" 
        mode="inline" 
        defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <Link to="/index">nav 1</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <Link to="/list">nav 2</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <Link to="/dsc">nav 3</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
