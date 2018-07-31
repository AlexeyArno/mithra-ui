import * as React from 'react'
import {Widget} from 'src/models/widget'
import * as Immutable from 'immutable';

require('./Widget.scss')

interface TicketData{
  name:string;
}

interface TicketProps {
    ticket: TicketData;
    // refreshWidgets: Function;
    // widgets: Immutable.List<Widget>;
};



class Ticket extends React.Component<TicketProps, void>{

    public static defaultProps: Partial<TicketProps> = {
        // widgets: Immutable.List([])
    };

    constructor(props: TicketProps) {
        super(props);
    }
    

    public render(){
        let data = this.props.ticket
        return(
          <div>
            {data.name}
          </div>
        )
    }

    // componentDidMount(){
    //   this.props.refreshWidgets();
    // }
}



export default Ticket