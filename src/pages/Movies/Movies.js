import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api/api';
import {SearchBar} from 'components/SearchBar/SearchBar';
import style from '../Pages.module.css'

const Movies = () => {
  const [movieToFind, setMovieToFind] = useSearchParams('');
  const [moviesList, setMoviesList] = useState([]);

  const location = useLocation();
  const currentQuery = movieToFind.get('query') ?? '';

  const getSearchMovies = async currentQuery => {
    try {
      await searchMovies(currentQuery).then(res => setMoviesList(res));
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    if (currentQuery === '') {
      return;
    }
    getSearchMovies(currentQuery);
  }, [currentQuery]);

  const onQueryChange = newQuery => {
    if (newQuery === currentQuery) {
      return alert('This film already found');
    }
    if (newQuery === '') {
      setMoviesList([]);
      return;
    }
    setMovieToFind({ query: newQuery });
  };

  return (
    <>
      <SearchBar onChangeQuery={onQueryChange} />
      <div>
        <div className={style.container}>
          {moviesList.map(movie => {
            return (
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                key={movie.id}
                className={style.movieItem}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path} `}
                  alt={movie.title}
                  className={style.image}
                />
                <p>
                  {movie.title ? movie.title : ' No information'}
                </p>
              </Link>
            );
          })}
        </div>
        </div>
    </>
  );
}

export default Movies;