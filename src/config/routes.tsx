import PopularPage from "../pages/popular";
// import NavigationBar from "../components/navigation-bar";
import SideBar from "../components/sidebar";
import {IRoute} from "src/interfaces/routes";

import * as React from "react";

const routes: {[key: string]: IRoute} = {
  Popular: {path: "/popular", component: <div className="coupleWrapper"><SideBar/> <PopularPage/></div>},
  // {path: "/", component: <div className="coupleWrapper"> <NavigationBar/><div className="content"/></div>},
};

export default routes;
