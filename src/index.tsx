import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react'
import Router from './routes/router'
import Routes from './routes/routes'



render(
    <main>
      <Router pathways={Routes}/> 
    </main>
    ,
    document.getElementById('root'),
);
