"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PagesLinks from "./src/PagesLinks";
import PagesRouters from "./src/PagesRouter";

const url = "https://reqres.in/api/users?per_page=12";

ReactDOM.render(
  <BrowserRouter>
    <PagesLinks />
    <PagesRouters url={url}></PagesRouters>
  </BrowserRouter>,
  document.getElementById("container")
);
