import PopularPage from "../pages/popular";
// import NavigationBar from "../components/navigation-bar";
import SideBar from "../components/sidebar";

import * as React from "react";

const routes: Array<{path: string, component: JSX.Element}> = [
  {path: "/", component: <div className="coupleWrapper"><SideBar/> <PopularPage/></div>},
  // {path: "/", component: <div className="coupleWrapper"> <NavigationBar/><div className="content"/></div>},
];

export default routes;
