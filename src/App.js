import React, {Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router'

const AuthPage = React.lazy(() => import('./pages/AuthPage').then(({AuthPage}) => ({default: AuthPage})))

const StrictRoute = ({component: Component, ...rest}) => {
  const token = localStorage.getItem('token')
  console.log(token)
  return (
    <Route {...rest} render={props => (
      token ? <Component {...props} /> : <Redirect to="/login"/>
    )}/>
  )
}

const StrictRoutes = () => {
  const token = localStorage.getItem('token')

  React.useEffect(() => {
    if (token) {
      // TODO
    }
  }, [token])

  return (
    <Switch>
      <StrictRoute exact path="/" component={() => <div>Not found</div>}/>
    </Switch>
  )
}

function App() {
  return (
    <Suspense fallback={<>Loading..</>}>
      <Switch>
        <Route exact path="/login" component={AuthPage}/>
        <StrictRoutes/>
      </Switch>
    </Suspense>

  )
}

export default App
