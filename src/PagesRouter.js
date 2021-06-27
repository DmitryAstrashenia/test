"use scrict";

import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Employees from "./Employees";

class PagesRouters extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Main} />
        <Route
          path="/employees"
          render={() => <Employees link={this.props.url} />}
        />
      </div>
    );
  }
}

export default PagesRouters;
