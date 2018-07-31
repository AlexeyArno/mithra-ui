import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider  } from 'react-redux';

interface RoutersComponentProps {
  pathways: Array<{path:string, component: JSX.Element}>;
  store: any
};

class RoutersComponent extends React.Component<RoutersComponentProps, {}>{

  public static defaultProps: Partial<RoutersComponentProps> = {
    pathways: []
  };

  constructor(props: RoutersComponentProps) {
      super(props);
  }

  public render(){
    let {pathways} = this.props
    let pathesRendered: Array<JSX.Element> =
      pathways.map((ob: {path:string, component:JSX.Element}, key)=>
      <Route path={ob.path} exact component={(props) => <Provider store={this.props.store}>{ob.component}</Provider>} key={key}/>
    )
    pathesRendered.push(<Route key={pathways.length} component={() => <h1>Page not found</h1>}/>)
    console.log(pathesRendered)
    return(
      <BrowserRouter>
        <div>
          <Switch>
            {pathesRendered}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}

export default RoutersComponent