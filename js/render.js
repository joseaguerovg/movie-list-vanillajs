function renderElement(movie){
    const $element = buildElement(movie);
    document.getElementById('container').insertAdjacentHTML('beforeend', $element);
}

function buildElement({title, poster_path, vote_average, id}){
    const template = `
        <article class="movie">
            <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="${title}">
            <p class="movie-title">${title}</p>
            <p class="movie-id">${id}</p>
            <span class="movie-rate">${vote_average}</span>
        </article>
    `

    return template
}

function cleanMovieList(){
    document.getElementById('container').innerHTML = '';
}

export default function renderMovieList(list){
    cleanMovieList()
    list.forEach(renderElement)
}