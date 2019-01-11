import * as React from "react";
import { render } from "react-dom";
import Router from "./routes/router";
import Routes from "./config/routes";
import Store from "./store";
import { IRootStore } from "./store/interfeces";

require("./main.scss");

const store: IRootStore  = new Store();
render(
  <main>
    <Router pathways={Routes} store={store}/>
  </main>
  ,
  document.getElementById("root"),
);
