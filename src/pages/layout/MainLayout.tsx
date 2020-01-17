import * as React from "react";
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Routes from '../../routers/routers'
import Saidbar from './Saidbar';
const { Header, Sider, Content } = Layout;
import './mainLayout.scss';
const { SubMenu } = Menu;

interface MainLayoutProps { }
interface MainLayoutState {
  collapsed: boolean
}
export default class MainLayout extends React.Component<MainLayoutProps, MainLayoutState> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  public render() {

    return (
      <div className="main-layout">
        <Layout>
          <Header style={{ padding: 0 }}>
            <Menu className="main-setting" mode="horizontal">
              <SubMenu
                title={<span className="submenu-title-wrapper"><Icon type="setting" />Vanlee</span>}>
                  <Menu.Item key="setting:1"><Link to="/set">设置</Link></Menu.Item>
                  <Menu.Item key="setting:2"><Link to="/login">退出</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Layout>
            <div className="main-menu collapse">
              <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}>
                {/* <div className="logo" /> */}
                <Saidbar />
              </Sider>
            </div>
            <Content
              style={{
                margin: 16,
                background: '#fff',
                minHeight: 280,
              }}
            >
              {Routes(true)}
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}