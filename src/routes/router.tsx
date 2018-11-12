import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { Provider  } from 'react-redux';
import { Provider } from 'mobx-react'

interface RouterComponentProps {
  pathways: Array<{path:string, component: JSX.Element}>;
  store: any
};

class Router extends React.Component<RouterComponentProps, {}>{

  public static defaultProps: Partial<RouterComponentProps> = {
    pathways: []
  };

  constructor(props: RouterComponentProps) {
      super(props);
  }

  public render(){
    let {pathways} = this.props
    console.log(this.props.store)
    let pathesRendered: Array<JSX.Element> =
      pathways.map((ob: {path:string, component:JSX.Element}, key)=>
      <Route path={ob.path} exact component={(props) => <Provider store={this.props.store}>{ob.component}</Provider>} key={key}/>
    )
    pathesRendered.push(<Route key={pathways.length} component={() => <h1>Page not found</h1>}/>)
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

export default Router