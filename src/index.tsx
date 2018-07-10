import * as React from "react"
import * as ReactDOM from "react-dom"
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch
} from "react-router-dom"

import { Test } from "./components/Test"

interface appProps {}
interface appState {}

const Demo = (props: any) => {
  console.log(props)
  return (
    <div>
      <div>测试</div>
      <Link to="/test">About</Link>
    </div>
  )
}

class App extends React.Component<appProps, appState> {
  
  public render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Demo} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    )
  }
}


let div = document.getElementById('app')
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  div
)
