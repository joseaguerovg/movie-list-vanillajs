import movies from './movies.js'
import render from './render.js'

const $searchForm = document.getElementById('search-form')

const filterByTitle = function(title){
    const newMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(title.toLowerCase())
    })

    return newMovies
}

$searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this)
    const title = formData.get('title')
    const movies = filterByTitle(title)
    render(movies)
})

