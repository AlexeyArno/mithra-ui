import * as React from 'react';

interface AppProps {
    message: string,
};

class App extends React.Component<AppProps, {}>{
    constructor(props: AppProps) {
        super(props);
    }

    public static defaultProps: Partial<AppProps> = {
        message: "None"
    };

    render(){
        return(
            <h1>Hello {this.props.message}</h1>
        )
    }
}



export = App