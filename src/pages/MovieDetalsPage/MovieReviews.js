import { useState, useEffect } from 'react';
import { getReviews } from 'api/api.';
import { useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';

export default function MovieReview() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const getMovieReviews = async movieId => {
    try {
      await getReviews(movieId).then(res => setReviews(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      <div>
        <div>
          {reviews.length ? (
            reviews.map(review => {
              return (
                <div key={review.id}>
                  <h3>{review.author}</h3>
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