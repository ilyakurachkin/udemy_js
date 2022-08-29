"use strict";

// const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
// const a = prompt('Один из последних посмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних посмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const zhenya = 90;

// if (zhenya < 55) {
//     console.log('Молодец Женя');
// } else if (zhenya > 57) {
//     console.log('много ешь Женя');
// } else if (zhenya == 56) {
//     console.log('Молодец Женя');
// }



// const hamburger = 3;
// const fries = '';

// if (hamburger === 3 && fries) {
//     console.log('Мы сыты');
// } else {
//     console.log('мы уходим');
// }

for (let i = 0; i <= 3; i++) {
    console.log(i);
    for (let j = 0; j <= 3; j++)
    console.log(j);
}

//*
//** 
//*** 
//**** 
//***** 
//******

let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
    for (let j = 0; j<i;j++)
    result += '*';

    result += '\n';
}

console.log(result);