// "use strict";

// (() => console.log('1'))();    //-----> anonimus and immediately-invoked(самовызов) function



// (() => {

// })();                      //--> шаблон, последние скобки - вызов функции

// //-------------------------------------------------------------------------------------------------------------------------------

// function sum(a) {
  
//   return function(b) {
//     return a + b;
//   }
// };

// console.log(sum(1)(2));

// //-------------------------------------------------------------------------------------------------------------------------------


// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   }
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3, 6)));

