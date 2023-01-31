import { useState, useEffect } from 'react';
import { useParams, NavLink, useLocation, Outlet} from 'react-router-dom';
import { getMovieDetails } from 'api/api.';
import GoBackButton from 'components/GoBackButton/GoBackButton';
//import { Loader } from 'components/Loader/Loader';
import style from './Pages.module.css'


///const MovieReview = lazy(() =>
 // import('../pages/MovieDetalsPage/MovieReviews' /* webpackChunkName:"MovieReview" */)
//);
///const MovieCast = lazy(() =>
 // import('../pages/MovieDetalsPage/MovieCast' /* webpackChunkName:"MovieCastView" */)
//);

//const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetails()  {
  const [movieItem, setMovieItem] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const onGoBack = location?.state?.from ?? '/';

  const getDetails = async movieId => {
    try {
      await getMovieDetails(movieId).then(res => setMovieItem(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails(movieId);
  }, [movieId]);

  return (
    <>
      <div className={style.container}>
        <GoBackButton location={onGoBack} />
        <div className={style.details}>
          <div className={style.movieList}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieItem?.poster_path}`}
              alt={movieItem?.title}
            />
          </div>
          <div className={style.movieInfo}>
            <h2 className={style.movieTitle}>{movieItem?.title}</h2>
            <p>User Score: {Math.round(movieItem?.vote_average) * 10}%</p>
            <div className={style.overview}>
              <h3>Overview</h3>
              <p>{movieItem?.overview}</p>
            </div>
            <div className={style.genreContainer}>
              <h3>Genres</h3>
              {movieItem?.genres.map(gen => {
                return (
                  <p key={gen.id} className={style.genresItem}>
                    {gen.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={style.btnContainer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeBtn : style.btnItem
          }
          to="cast"
        >
          Cast
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeBtn : style.btnItem
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}