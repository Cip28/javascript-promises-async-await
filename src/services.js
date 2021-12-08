

export default function fetchWithTimeout (delay) {
    return new Promise(resolve => setTimeout(resolve,delay))
}
export default function fetchMovies () {
    return fetch("./data/movies.json")
        .then(response => response.json())
        .then(movies=>movies)
        .catch(error=>console.log(error))
}
export default function fetchBooks () {
    return fetch("./data/books.json")
        .then(response => response.json())
        .then(books=>books)
        .catch(error=>console.log(error))
}
