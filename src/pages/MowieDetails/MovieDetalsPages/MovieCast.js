import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/api';
import style from './MovieDetailsPages.module.css';

const MovieCast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  const getCast = async movieId => {
    try {
      await getMovieCast(movieId).then(res => setCasts(res));
    } catch (error) {
        return;
    }
  };

  useEffect(() => {
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      <div className={style.castContainer}>
        {casts.map(actor => {
              return (
                <div key={actor.id}
                className={style.actotCard}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    alt={actor.original_name}
                    className={style.actorImage}
                  />
                  <h5>{actor.original_name}</h5>
                  <p>
                    Character: <br />
                    {actor.character}
                  </p>
                </div>
              );
            })
        }
      </div>
    </>
  );
}

export default MovieCast;
