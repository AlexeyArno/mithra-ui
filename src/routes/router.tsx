import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "mobx-react";

interface IRouterComponentProps {
  pathways: Array<{path: string, component: JSX.Element}>;
  store: any;
}

const Page = (component: JSX.Element, store: any) => {
  return  () => <Provider store={store}>{component}</Provider>;
};
const Page404 = () => <h1>Page not found</h1>;

class Router extends React.Component<IRouterComponentProps, {}> {

  public static defaultProps: Partial<IRouterComponentProps> = {
    pathways: [],
  };

  constructor(props: IRouterComponentProps) {
      super(props);
  }

  public render() {
    const {pathways} = this.props;
    const pathesRendered: JSX.Element[] =
      pathways.map((ob: {path: string, component: JSX.Element}, key) =>
        <Route
         path={ob.path}
         exact={true}
         key={key}
         component={Page(ob.component, this.props.store)}
        />);
    pathesRendered.push(<Route key={pathways.length} component={Page404}/>);
    return(
      <BrowserRouter>
        <div>
          <Switch>
            {pathesRendered}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
