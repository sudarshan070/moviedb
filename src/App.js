import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Cast from './components/Cast';
import Header from './components/Header'
import Landing from './components/Landing';
import MovieDetail from './components/MovieDetail';
import Person from './components/Person';
import Upcoming from './components/TopRated';
import TopRated from './components/Upcoming';



function App() {
  return (
    < BrowserRouter >
      <Header />
      <Switch>
        <Route exact path='/'  >
          <Redirect to='/popular' />
        </Route>
        <Route exact path='/popular' component={Landing} />
        <Route exact path='/top-rated' component={TopRated} />
        <Route exact path='/upcoming' component={Upcoming} />
        <Route exact path='/movie/:id' component={MovieDetail} />
        <Route exact path='/movie/:id/cast' component={Cast} />
        <Route exact path='/person/:id' component={Person} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
