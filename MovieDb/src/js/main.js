import { MovieDb } from './MovieDb.js';

const topRated = await MovieDb.getTopRated();

topRated.results.map(movie => {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h2');
    const date = document.createElement('p');
    const circle = document.createElement('div');
    const vote = document.createElement('p');
    const description = document.createElement('p');

    article.classList.add('m-5', 'd-flex', 'border', 'rounded-5', 'shadow');
    img.src = 'https://image.tmdb.org/t/p/original' + movie.poster_path;
    img.classList.add('image');
    div.classList.add('desc', 'mx-5');
    title.textContent = movie.title;
    title.classList.add('m-3', 'ms-0');
    date.textContent = movie.release_date;
    date.classList.add('text-secondary')
    circle.classList.add('bg-dark', 'rounded-circle', 'circle', 'mb-3')
    vote.textContent = movie.vote_average;
    vote.classList.add('p-2');
    vote.classList.add('text-warning')
    description.textContent = movie.overview;

    circle.append(vote);
    div.append(title, circle, date, description);
    article.append(img, div);
    document.querySelector('#movies').append(article);
});


