import * as React from "react";
import { LocaleProvider } from 'antd';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import '../style.scss';
import MainLayout from './layout/MainLayout'

export default class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    /*
      所有页面静置特定时间后，登出
    */
    // if (window.location.pathname !== '/login') {
    //   Event.addListener(document, 'mousemove', this.handleMousemove);
    //   this.interval = setInterval(() => {
    //     this.plus()
    //   }, 1000);
    // }
  }

  

  // plus() {
  //   this.timer += 1;
  //   if (this.timer === this.second) {
  //     API.Admin.logout({ adminId: profile.userId, loginSource: 2 }, () => {
  //       window.location.href = '/user/logout'
  //     })
  //     window.location.href = '/user/logout'
  //     clearInterval(this.interval);
  //     this.timer = 0;
  //   }
  // }

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Router>
          <MainLayout>{this.props.children}</MainLayout>
        </Router>
      </LocaleProvider>
    )
  }
}
