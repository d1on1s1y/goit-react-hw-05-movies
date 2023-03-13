import axios from 'axios';

const KEY = '31975911-9c86cb7376d5e39939dd975bc';

export const trendingMovies = () => {
  const queryParams = new URLSearchParams({
    api_key: KEY,
  });
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?${queryParams}`)
    .then(response => response.json())
    .then(response => response.results)
    .catch(error => error);
};

export const movieInfo = async movie_id => {
  const fetchData = await axios.get(`
https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`);
  return fetchData;
};

export const actorInfo = async movie_id => {
  const fetchData = await axios.get(`
  https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}&language=en-US
    `);
  return fetchData;
};

export const movieReviews = async movie_id => {
  const fetchData = await axios.get(`
    https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1
    `);
  return fetchData;
};

export const movieFinder = async search => {
  const fetchData = await axios.get(`
  https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${search}&language=en-US&page=1&include_adult=false`);
  return fetchData;
};