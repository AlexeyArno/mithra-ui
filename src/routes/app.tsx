import * as React from "react";
import Sidebar from "src/components/sidebar";
import {Route, Switch, Redirect} from "react-router-dom";

interface IAppProps {
  pathways: {[key: string]: JSX.Element};
  defaultRedirect: string;
}

export default class App extends React.Component<IAppProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    const {pathways} = this.props;
    const pathesRendered: JSX.Element[] = Object.keys(pathways).map((name, key) =>
        <Route
         path={"/" + name}
         key={key}
         component={() => pathways[name]}
        />);
    return(
      <div className="coupleWrapper">
        <Sidebar/>
        <Switch>
          {pathesRendered}
          <Redirect from="/" to={this.props.defaultRedirect} />
        </Switch>
      </div>
    );
  }
}
