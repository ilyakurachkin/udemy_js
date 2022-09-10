"use strict";


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

//-----------------Счетчик валют------------

const usdCurr = 2.54
const eurCurr = 2.55

function currencyCounter (summ,calc) {
    console.log(summ*calc)
}

currencyCounter(100,usdCurr)
currencyCounter(57,eurCurr)

//--------------Function-----------------

let num = 20;


function showFirstMessage(text) {
    console.log(text);
    let num = 10
    console.log(num)
}

showFirstMessage('hello world');
console.log(num)


function calc(a,b) {
    return (
        a + b 
    )
}

console.log(calc(1,5))






function ret() {
  num = 50
  
  
  return num;
}

const oneNumber = ret();
console.log(oneNumber)






const logger = function art() {
    console.log('HELLO')
}; 
logger()



const calcc = (a,b) => {
     a + b ;
}
const summ = calcc(3,2)

console.log(summ)

