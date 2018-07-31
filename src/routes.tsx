import App from './components/App';
import AuthScreenComponent from './components/auth-screen/AuthScreen'


const routes: Array<{path:string, component: JSX.Element}> = [
  {path: "/", component: <App/>},
  {path: "/auth", component: <AuthScreenComponent/>}
]

export default routes