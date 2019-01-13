import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { Provider } from "mobx-react";
import App from "./app";

interface IRouterComponentProps {
  pathways: {[key: string]: JSX.Element};
  sidebarRoutes: {[key: string]: JSX.Element};
  store: any;
  defaultRedirect: string;
}

const Page = (component: JSX.Element, store: any) => {
  return  () => <Provider store={store}>{component}</Provider>;
};
const Page404 = () => <h1>Page not found</h1>;

class Router extends React.Component<IRouterComponentProps, {}> {

  public static defaultProps: Partial<IRouterComponentProps> = {
    pathways: {},
  };

  constructor(props: IRouterComponentProps) {
    super(props);
  }

  public render() {
    const {pathways, sidebarRoutes} = this.props;

    const routes: JSX.Element[] = Object.keys(pathways).map((name, key) =>
          <Route
            path={"/" + name}
            key={key}
            strict={true}
            component={Page(pathways[name], this.props.store)}
          />);

    const app = () => <App pathways={sidebarRoutes} defaultRedirect={this.props.defaultRedirect} />;

    return(
      <BrowserRouter>
        <Switch>
          {routes}
          <Route path="/" component={app} />
          <Route key={Object.keys(pathways).length} component={Page404}/>
          <Redirect from="/" to={this.props.defaultRedirect} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
