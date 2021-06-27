"use scrict";

import React from "react";
import { NavLink } from "react-router-dom";
import "./css/PagesLinks.css";

class PagesLinks extends React.Component {
  render() {
    return (
      <div className="Links">
        <NavLink to="/" exact activeClassName="active">
          Главная
        </NavLink>
        <NavLink to="/employees" activeClassName="active">
          Сотрудники
        </NavLink>
      </div>
    );
  }
}

export default PagesLinks;
