import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages/Home";
function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
