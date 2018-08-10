import App from '../components/App';
import * as React from 'react'

const routes: Array<{path:string, component: JSX.Element}> = [
  {path: "/", component: <App/>},
]

export default routes