import PopularPage from "../pages/popular";
// import NavigationBar from "../components/navigation-bar";
import SideBar from "../components/sidebar";
import SignIn from "../pages/auth-windows/sign-up/index";
import {IRoute} from "src/interfaces/routes";

import * as React from "react";

const routes: {[key: string]: IRoute} = {
  // Popular: {path: "/popular", component: <div className="coupleWrapper"><SideBar/> <PopularPage/></div>},
  Popular: {path: "/popular", component: <div className="coupleWrapper"> <SignIn/><div className="content"/></div>},
};

export default routes;
