import * as React from 'react';
import { render } from 'react-dom';
import {AppStore} from './store/app-store'
import Router from './router'
import Routes from './routes'

render(
    <main>
     <Router pathways={Routes} store={AppStore}/>
    </main>
    ,
    document.getElementById('root'),
);
