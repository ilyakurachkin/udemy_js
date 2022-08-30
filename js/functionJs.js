'use strict'

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