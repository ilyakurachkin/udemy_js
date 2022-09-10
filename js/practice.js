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


// 'use strict'

// let num = 20;


// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10
//     console.log(num)
// }

// showFirstMessage('hello world');
// console.log(num)


// function calc(a,b) {
//     return (
//         a + b 
//     )
// }

// console.log(calc(1,5))






// function ret() {
//   num = 50
  
  
//   return num;
// }

// const oneNumber = ret();
// console.log(oneNumber)






// const logger = function art() {
//     console.log('HELLO')
// }; 
// logger()



// const calcc = (a,b) => {
//      a + b ;
// }
// const summ = calcc(3,2)

// console.log(summ)





























