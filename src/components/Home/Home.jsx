import React, {useEffect} from 'react';
import './Home.scss';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movieSlice';



const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  
  return (
    <section>
      <div className="container">
        <div className="banner__img"></div>
        <MovieListing />
      </div>
    </section>
  );
}

export default Home;