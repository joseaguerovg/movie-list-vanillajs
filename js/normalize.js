import movies from './movies.js'

const movieList = movies.reduce((list, movie) => {
    list.set(movie.id, movie)
    return list
}, new Map())

const all = movies.map(movie => movie.id)

const popular = movies.reduce((list, movie) => {
    if(movie.vote_average > 7){
        list.push(movie.id)
    }

    return list
}, [])

const notPopular = movies.reduce((list, movie) => {
    if(movie.vote_average <= 7){
        list.push(movie.id)
    }

    return list
}, [])

export {
    movieList,
    all,
    popular,
    notPopular
}