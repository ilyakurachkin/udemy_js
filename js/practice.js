"use strict";
const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних посмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
а
}

console.log(personalMovieDB);


