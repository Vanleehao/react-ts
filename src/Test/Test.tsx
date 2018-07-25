import * as React from 'react';
import {DatePicker} from 'antd';
import './Test.scss';
interface TestProps {
  name: string
  company: string
}

export default class Test extends React.Component<TestProps, {}> {
  render() {
    return (
      <div className="test">
        Hello React
        <DatePicker />
      </div>
    )
  }
}
