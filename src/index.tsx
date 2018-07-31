import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import AuthScreenComponent from './components/auth-screen/AuthScreen'
import { Provider } from 'react-redux'

import {AppStore} from './store/app-store'
import RoutersComponent from './routes'


// const history = createHistory();
// const store = GetStore(history)



const routes: Array<{path:string, component: JSX.Element}> = [
    {path: "/", component: <App/>},
    {path: "/auth", component: <AuthScreenComponent/>}
]


render(
    <main>
     <RoutersComponent pathways={routes} store={AppStore}/>
    </main>
    ,
    document.getElementById('root'),
);
