import movies from './movies.js'
import render from './render.js'

const $searchForm = document.getElementById('search-form')

const filterByTitle = function(title){
    return movies.filter((movie) => {
        return movie.title.toLowerCase().includes(title.toLowerCase())
    })
}

const findById = function(id){
    return movies.find((movie) => movie.id === parseInt(id, 10))
}

function searchMovie(query){
    if(isNaN(query)){
        return filterByTitle(query)
    }

    return [findById(query)]
}

$searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this)
    const title = formData.get('title')
    if(title.trim() != ''){
        const movies = searchMovie(title)

        if(movies.length > 0){
            return render(movies)
        }

        return alert('No encontramos tu película')
    }

    return alert('Debes ingresar algo en el buscador')
    
})

