import { Genre } from './components/Genre';
import Header from './components/Header'
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='d-flex'>
        <Genre />
        <MovieList />
      </div>

    </div>
  );
}

export default App;
