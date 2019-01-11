import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import {IRoute} from "src/interfaces/routes";
import { Provider } from "mobx-react";

interface IRouterComponentProps {
  pathways: {[key: string]: IRoute};
  store: any;
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
    const {pathways} = this.props;
    const pathesRendered: JSX.Element[] = Object.keys(pathways).map((name, key) =>
        <Route
         path={pathways[name].path}
         exact={true}
         key={key}
         component={Page(pathways[name].component, this.props.store)}
        />);
    pathesRendered.push(<Route key={Object.keys(pathways).length} component={Page404}/>);
    return(
      <BrowserRouter>
        <div>
          <Switch>
            {pathesRendered}
          </Switch>
          <Redirect from="/" to="popular" />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
