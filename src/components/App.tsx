import * as React from 'react';

require('./App.scss')

interface AppProps {
    message?: string,
};

class App extends React.Component<AppProps, {}>{

    public static defaultProps: Partial<AppProps> = {
        message: "None"
    };

    constructor(props: AppProps) {
        super(props);
    }
    

    render(){
        return(
            <h1>Hello {this.props.message}</h1>
        )
    }
}



export default App