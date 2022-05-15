"use strict";

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
const a = prompt('Один из последних посмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних посмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



