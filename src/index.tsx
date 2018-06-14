import * as React from 'react';
import { render } from 'react-dom';
// import App from './components/App';
import { Provider } from 'react-redux'

import {AppStore} from './store/app-store'
import {WidgetTable} from './components/widget/widget-table-container/WidgetTable'

render(
    // <App message="World" />,
    <Provider store={AppStore}>
        <WidgetTable/>
    </Provider>,
    document.getElementById('root'),
);
