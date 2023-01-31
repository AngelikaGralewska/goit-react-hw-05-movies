import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from 'react';

import Loader from "./Loader/Loader";
import Navigation from "./Navigation/Navigation";



const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MovieCast = lazy(() => import('../pages/MovieDetalsPage/MovieCast'));
const MovieReviews = lazy(() => import('../pages/MovieDetalsPage/MovieReviews'));

export function App() {

  return (
    <>
      <Suspense fallback={Loader}>
      <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
    
  );
};
