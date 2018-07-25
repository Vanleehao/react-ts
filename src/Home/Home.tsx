import * as React from 'react';
import { } from 'antd';
import './Home.scss';

interface TestProps {
  name: string
  company: string
}

export default class Home extends React.Component<TestProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {

    }
  }

  public render() {
    return (
      <div className="home-page">
        首页
      </div>
    )
  }
}
