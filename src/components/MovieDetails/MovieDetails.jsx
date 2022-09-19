import React, {useEffect} from 'react';
import './MovieDetails.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMvieOrShow } from '../../features/movieSlice';

const MovieDetails = () => {
  const { imdbID } = useParams();

  const dispatch = useDispatch();

  const data = useSelector(getSelectedMvieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
  }, [dispatch, imdbID])

  return (
    <section className='movie__section'>
      <div className="section__left">
        <h3 className="movie__title">{data.Title}</h3>
        <div className="movie__rating">
          <span>IMDB Rating : {data.imdbRating}</span>
          <span>IMDB Votes : {data.imdbVotes}</span>
          <span>Runtime : {data.Runtime}</span>
          <span>Year : {data.Year}</span>
        </div>

        <div className="movie__plot">{data.Plot}</div>
        <div className="movie__info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>

      <div className="section__right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </section>
  );
}

export default MovieDetails;