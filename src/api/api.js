import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY ='0d289c08cd20965dbf909e0560865242';

export const searchMovies = async movie => {
    const { data } = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${movie}`);
    return data.results;
  };
  
export const getMovieDetails = async movieId => {
    const { data } = await axios.get(`movie/${movieId}$?api_key=${API_KEY}&language=en-US`);
    return data;
  };
  
export const fetchTrendingMovies = async () => {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return data.results;
  };
  
export const getMovieCast = async movieId => {
    const { data } = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return data.cast;
  };
  
export const getReviews = async movieId => {
    const { data } = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return data.results;
  };