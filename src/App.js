import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cast from './components/Cast';
import Header from './components/Header'
import Landing from './components/Landing';
import MovieDetail from './components/MovieDetail';



function App() {
  return (
    < BrowserRouter >
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/movie/:id' component={MovieDetail} />
        <Route exact path='/movie/:id/cast' component={Cast} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
