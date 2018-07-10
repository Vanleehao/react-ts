import * as React from "react";
import './test.css';

interface TestProps {
  name: string
  company: string
}

export class Test extends React.Component<TestProps, {}> {
  render() {
    return (
      <div className="test">
        Hello React
      </div>
    )
  }
}
