import PopularScreen from '../pages/popular-screen'
import * as React from 'react'

const routes: Array<{path:string, component: JSX.Element}> = [
  {path: "/", component: <PopularScreen/>},
]

export default routes