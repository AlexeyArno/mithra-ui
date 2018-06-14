import * as React from 'react';
import {Widget} from 'src/models/widget'

require('./Widget.scss')

interface WidgetProps {
    refreshWidgets: Function;
    widgets: Widget[];
};



class WidgetComponent extends React.Component<WidgetProps, void>{

    public static defaultProps: Partial<WidgetProps> = {
        widgets: []
    };

    constructor(props: WidgetProps) {
        super(props);
    }
    

    public render(){
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