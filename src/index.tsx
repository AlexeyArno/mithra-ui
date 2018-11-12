import * as React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'mobx-react'
import Router from './routes/router'
import Routes from './routes/routes'
import Store from 'src/store'
import { IRootStore } from './store/interfeces';


let store:IRootStore  = new Store()
render(
    <main>      
      <Router pathways={Routes} store={store}/> 
    </main>
    ,
    document.getElementById('root'),
);
