import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Result from "./screens/result";
import Welcome from "./screens/Welcome";
import Loading from "./screens/loading";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render () {
    return <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/loading" component={Loading} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  }
}

export default App;
