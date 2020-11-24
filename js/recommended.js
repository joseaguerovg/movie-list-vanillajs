import movies from './movies.js'
import render from './render.js'

const $button = document.getElementById('recommended')

$button.addEventListener('click', (e) => {
    if(e.target.dataset.active == 'false'){
        render(setRecommendedMovies(movies))
    }else{
        render(movies)
    }
    changeButton()
})

function setRecommendedMovies(movies){
    const newMovies = movies.map((movie, index) => {
        return {...movie, recommended: movie.vote_average > 7}
    })

    return newMovies;
}

function changeButton(){
    const active = ($button.dataset.active == 'true') ? false : true;
    $button.dataset.active = active
}