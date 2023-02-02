import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'api/api';
import style from '../Pages.module.css';


const Home = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
  
    const getTrendingMovies = async () => {
        try {
          await fetchTrendingMovies().then(res => setMovies(res));
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getTrendingMovies();
      }, []);
  
    return (
      <>
          <div >
        <div className={style.container}>
          {movies.map(movie => {
            return (
              <Link
                to={`/movies/${movie.id}`}
                state={{ location }}
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
  };

  export default Home;