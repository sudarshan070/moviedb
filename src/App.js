import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import Landing from './components/Landing';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    < BrowserRouter>
      <Header />
      <Route exact path='/' component={Landing} />
      <Route path='/movie/:id' component={MovieDetail} />
    </BrowserRouter>
  );
}

export default App;
