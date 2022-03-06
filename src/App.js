import React from 'react';
import Home from './Pages/Home/Home.js';
import Error from './Pages/Error/Error.js';
import Detail from './Pages/Detail/Detail.js';
import { Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <main className='App'>
      <Switch>
        <Route
          exact path='/'
          render={() => <Home/>}
        />
        <Route
          exact path='/characters/:name'
          render={({match}) =>
          <Detail /> }
        />
        <Route path='/error' component={Error}/>
        <Redirect to='/error'/>
      </Switch>
    </main>
  )
}

export default App;
