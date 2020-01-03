import * as React from "react";
import { Layout, Tree, Icon } from 'antd';
import Routes from '../../routers/routers'
import Saidbar from './Saidbar';
const { Header, Sider, Content } = Layout;
import './mainLayout.scss';

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
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Saidbar />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
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