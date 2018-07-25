import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Link, Switch } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";
import ListOfGoods from "./ListOfGoods";
import "./style.scss";

interface appProps { }
interface appState { }

const Demo = (props: any) => {
  console.log(props)
  return (
    <div>
      <Link to="/home">Home</Link><br />
      <Link to="/list">List</Link><br />
      <Link to="/test">Test</Link>
    </div>
  )
}

class App extends React.Component<appProps, appState> {

  public render() {
    return (
      <Switch>
        <Route exact path="/" component={Demo} />
        <Route path="/home" component={Home} />
        <Route path="/list" component={ListOfGoods} />
        <Route path="/test" component={Test} />
      </Switch>
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
