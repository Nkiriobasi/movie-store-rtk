import React from 'react';
import './MovieCard.scss';
import { Link  } from 'react-router-dom';

const MovieCard = ({ data }) => {
  return (
    <section className='card__item'>
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card__inner">
          <div className="card__top">
            <img src={data.Poster} alt={data.Title} />
          </div>

          <div className="card__bottom">
            <div className="card__info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default MovieCard;