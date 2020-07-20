import React, { Fragment } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Components
import Landing from  "./components/landing/Landing"
import Routes from "./components/routing/Routes.js";

//Stylesheets
import './stylesheet/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <main>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route component={Routes} />
              </Switch>
          </main>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
