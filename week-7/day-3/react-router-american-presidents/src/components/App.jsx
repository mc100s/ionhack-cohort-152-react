import React from 'react';
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import About from './pages/About'
import ListPresidents from './pages/ListPresidents'
import PresidentDetail from './pages/PresidentDetail'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="container">
        {/* Switch stops after rendering the 1st Route */}
        <Switch>
          {/* Tool to render Home when the URL is exactly "/" */}
          <Route exact path='/' component={Home}/>
          {/* Tool to render About when the URL starts with "/about" */}
          <Route path='/about' component={About}/>
          <Route path='/list-presidents' component={ListPresidents}/>
          {/* Tool to render PresidentDetail when the URL starts with "/president-detail/..." and it defines a props.match.params.number */}
          <Route path='/president-detail/:number' component={PresidentDetail}/>
          {/* Tool to render "404" when all the previous failed (thanks to the Switch) */}
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
