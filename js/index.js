// "use strict"
// //Задачи на циклы 
// //1: выведите числа от 5 до 10 в консоль
// // let i = 5;
// // while (i<=10) {
// //     console.log(i);
// //     i++;
// // }
// //2:При помощи цикла for вывести числа от 20 до 10 в консоль.
// // for (let i = 20; i >= 10; i--) {
// //     console.log(i)
// //     if (i === 13) {
// //         break;
// //     }
// // } 
// //3:При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for (let i = 2; i <= 10;i++) {
//     if (i % 2 == 0 ) {
//         console.log(i)
//     }
// }
// //4:перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
// // Не создайте бесконечный цикл! Иначе браузер может зависнуть. 
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  };
// //---------------------------------------------------------------------------------------
// let i = 2;

// while (i < 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue; 
//     } else {
//         console.log(i)
//     }
// }
// 5:Заполните массив цифрами от 5 до 10 включительно.
function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i<=10;i++) {
        arrayOfNumbers[i - 5] = i;
    }
    
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}

// цикл for in
let user = {
    name: 'alex',
    age: 19,
    address: 'minsk'
}

for( let key in user) {
    console.log(key)   
    console.log(user[key])   
}