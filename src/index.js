import movies from 'movies.json'
import fetchWithTimeout from './services';
import './services/fetchWithTimeout'

export default function fetchMovies () {
    const resolveFunction = () => movies;
    fetchWithTimeout(1000)
    .then(resolveFunction)
}
const moviePromise = fetchMovies();
moviePromise.then