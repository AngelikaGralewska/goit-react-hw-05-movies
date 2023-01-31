import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/api.';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const getCast = async movieId => {
    try {
      await getMovieCast(movieId).then(res => setCast(res));
    } catch (error) {
        return;
    }
  };

  useEffect(() => {
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      <div >
        {
         cast.map(actor => {
              return (
                <div key={actor.id}>
                  <p>{actor.original_name}</p>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                        : `https://image.tmdb.org/t/p/w300/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg`
                    }
                    alt={actor.original_name}
                  />
                  <p>
                    Character: <br />
                    {actor.character}
                  </p>
                </div>
              );
            })
          //: "We don't have information about actors"
        }
      </div>
    </>
  );
}
