import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Cast from './components/Cast';
import { Genre } from './components/Genre';
import GenreMovieList from './components/GenreMovieList';
import Header from './components/Header'
import Landing from './components/Landing';
import MovieDetail from './components/MovieDetail';
import Person from './components/Person';
import Upcoming from './components/TopRated';
import TopRated from './components/Upcoming';
import { API_KEY, baseURL } from './utils/api';



function App() {
  const [genres, setGenre] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [id, setId] = useState(1);


  useEffect(() => {
    async function fetchData() {
      try {
        const genre = await Axios.get(
          `${baseURL}/genre/movie/list?api_key=${API_KEY}`
        );
        const { genres } = genre.data;
        setGenre(genres);
        const movies = await Axios.get(
          `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=${id}&sort_by=popularity.desc`
        );
        const movie = movies.data.results;
        setDiscoverMovies(movie);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  const handleClick = (id) => {
    setId(id);
  };

  return (
    < BrowserRouter >
      <Header />
      <div className='d-flex'>
        <Genre handleClick={handleClick} genres={genres} />
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
          <Route exact path='/genre/:name' render={() => <GenreMovieList discoverMovies={discoverMovies} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
