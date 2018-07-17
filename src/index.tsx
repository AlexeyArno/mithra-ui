import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'

import {AppStore} from './store/app-store'


render(
    // <App message="World" />,
    <Provider store={AppStore}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
