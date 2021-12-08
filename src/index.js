import { fetchWithTimeout, fetchMovies, fetchBooks } from './services';
const movies = require('./movies.json');


const getBooksAndMovies = () => {
    Promise.all([fetchBooks(), fetchMovies()])
        .then(([books, movies]) => ({
            books,
            movies
        }))
    .catch(error => console.log("Error in fetching the movies and books",error))

}
const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then(results => {console.log('getBooksAndMoviesPromise', results)})

function getBooksOrMovies(){
    Promise.race([fetchBooks(), fetchMovies()])
        .then(results => results)
        .catch(error => console.log("Error waiting for the promise race",error))
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then(results => console.log('getBooksOrMoviesPromise', results))
