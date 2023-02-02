import { useState, useEffect } from 'react';
import { getReviews } from 'api/api';
import { useParams } from 'react-router-dom';
import style from './MovieDetailsPages.module.css';

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const getMovieReviews = async movieId => {
    try {
      await getReviews(movieId).then(res => setReviews(res));
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      <div>
        <div className={style.reviewsContainer}>
          {reviews.length ? (
            reviews.map(review => {
              return (
                <div key={review.id}>
                  <h5>{review.author}</h5>
                  <p>{review.content}</p>
                </div>
              );
            })
          ) : (
            <div>
              <p>We don't have any reviews for this movie</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MovieReview;