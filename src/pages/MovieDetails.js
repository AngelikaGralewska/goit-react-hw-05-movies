import { useState, useEffect } from 'react';
import { useParams, NavLink, useLocation, Outlet} from 'react-router-dom';
import { getMovieDetails } from 'api/api.';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import style from './Pages.module.css'


export default function MovieDetails()  {
  const [movieItem, setMovieItem] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const onGoBack = location?.state?.from ?? '/';

  const getDetails = async movieId => {
    try {
      await getMovieDetails(movieId).then(res => setMovieItem(res));
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    getDetails(movieId);
  }, [movieId]);

  return (
    <>
    <GoBackButton location={onGoBack}
     />
      <div className={style.container}>
        <div className={style.detailsContainer}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieItem?.poster_path}`}
              alt={movieItem?.title}
              className={style.detailsImage}

            />
          </div>
          <div>
            <h1 className={style.movieTitle}>{movieItem?.title}</h1>
            <p>User Score: {movieItem?.vote_average} / 10</p>
            <div className={style.overview}>
              <h4>Overview:</h4>
              <p>{movieItem?.overview}</p>
            </div>
            <div>
              <h4>Genres:</h4>
              {movieItem?.genres.map(gen => {
                return (
                  <li key={gen.id} className={style.genresItem}>
                    {gen.name}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={style.buttonContainer}>
        <NavLink className={style.button} to="cast" >
          Cast
        </NavLink>
        <NavLink className={style.button} to="reviews">
          Reviews
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}