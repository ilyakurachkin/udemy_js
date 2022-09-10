"use strict";
const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних посмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//         personalMovieDB.movies[a] = b;
//     if ( a != null && b !=null && a != '' && b != '' && a.length < 50) {
//         console.log('Done') 
//       }  else {
//         console.log('error')
//         i--
//     }
//---Для закрепления 
let i = 0;
while(i < 2) {
    i++
    const a = prompt('Один из последних посмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          personalMovieDB.movies[a] = b;

        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            console.log('Done')
        } else {
            console.log('Error')
            i--
        }
}

    if (personalMovieDB.count < 10) {
        console.log('Просмотрино довольно мало фильмов') 
         } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
            console.log('Вы классический зритель')
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман') 
        } else {
            console.log('Произошла ошибка')
        }

console.log(personalMovieDB);






























