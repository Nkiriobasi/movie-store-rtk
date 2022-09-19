import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, renderShows = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    })
  ) : (
    <div className="moives-error">
      <h3>{movies.error}</h3>
    </div>
  )

  renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index) => {
      return <MovieCard key={index} data={show} />;
    })
  ) : (
    <div className="shows-error">
      <h3>{shows.error}</h3>
    </div>
  )

  return (
    <section className='movie'>
      <div className="movie__list">
        <h2>Movies</h2>
        <div className="movie__container">{renderMovies}</div>
      </div>

      <div className="show__list">
        <h2>Shows</h2>
        <div className="movie__container">{renderShows}</div>
      </div>
    </section>
  );
}

export default MovieListing;