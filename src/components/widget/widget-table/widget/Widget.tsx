import * as React from 'react'
import {Widget} from 'src/models/widget'
import * as Immutable from 'immutable';

require('./Widget.scss')

interface WidgetProps {
    refreshWidgets: Function;
    widgets: Immutable.List<Widget>;
};



class WidgetComponent extends React.Component<WidgetProps, void>{

    public static defaultProps: Partial<WidgetProps> = {
        widgets: Immutable.List([])
    };

    constructor(props: WidgetProps) {
        super(props);
    }
    

    public render(){
      console.log("Hello2")
        return(
          <table>
            <thead>
              <tr>
                <th>Size</th>
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



export default WidgetComponent