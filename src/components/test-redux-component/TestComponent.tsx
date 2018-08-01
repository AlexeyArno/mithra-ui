import * as React from 'react'
import {Widget} from 'src/models/widget'
import {connect} from "react-redux";
import {bindActionCreators} from "redux"

import {refreshWidgets} from "src/actions/refresh-widgets"

import * as Immutable from 'immutable';

interface TestComponentProps {
  refreshWidgets: Function;
  widgets: Immutable.List<Widget>;
};



class TestComponentRedux extends React.Component<TestComponentProps, {}>{

  public static defaultProps: Partial<TestComponentProps> = {
      widgets: Immutable.List([])
  };

  constructor(props: TestComponentProps) {
      super(props);
  }
  
  public render(){
      return(
        <table>
          <thead>
            <tr>
              <th>Size Test</th>
            </tr>
          </thead>
          <tbody>
            {this.props.widgets.map((w,i)=> <tr key={i}>
              <td>{w.size}</td>  
            </tr>)}
          </tbody>
        </table>
      )
  }

  componentDidMount(){
    this.props.refreshWidgets();
  }
}


const mapStateToProps = (state:any) =>{
  return {
    widgets:  state.widgetReducer.widgets
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({refreshWidgets}, dispatch);

export const TestRedux = 
connect(mapStateToProps, mapDispatchToProps)(TestComponentRedux)

