import PopularPage from "src/pages/popular";
import Follow from "src/pages/follows";
import Search from "src/pages/search";
import Settings from "src/pages/settings";
import Additional from "src/pages/addittional";
import Sign from "src/pages/sign";
import SideBar from "../components/sidebar";
import {IRoute} from "src/interfaces/routes";

import * as React from "react";
const CN: string = "coupleWrapper";

const SIDEBAR_ROUTES: {[key: string]: JSX.Element} = {
  popular: <PopularPage/>,
  follow: <Follow/>,
  search: <Search/>,
  settings: <Settings/>,
  add: <Additional/>,
};

const ROUTES: {[key: string]: JSX.Element} = {
  sign: <Sign/>,
};

const DEFAULT_REDIRECT: string = "/sign";

export {SIDEBAR_ROUTES, ROUTES, DEFAULT_REDIRECT};
