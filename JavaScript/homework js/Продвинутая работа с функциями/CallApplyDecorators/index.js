// Декоратор-шпион
// важность: 5
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

// Например:






// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }

// function spy(func) {

//   wrapper.calls = [];

//   function wrapper(...rest) {
//     wrapper.calls.push(rest);
//     return wrapper
//   }

//   return wrapper;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// }


//------------------------------------------------------------------------------------------------------


// Задерживающий декоратор
// важность: 5
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

// function f(x) {
//   console.log(x);
// }

// function delay(f, ms) {
//   return function (...rest) {
//     setTimeout(() => {
//       f.call(this, ...rest)

//     }, ms);
//   }
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test2"); // показывает "test" после 1500 мс
// // Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

// // В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.



//------------------------------------------------------------------------------------------------------


// // Декоратор debounce
// // важность: 5
// // Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

// // Например:

// function debounce(f, ms) {
//   let isCoolDown = false;

//   return function () {
//     if (isCoolDown) return;

//     f.apply(this, arguments);

//     isCoolDown = true;

//     setTimeout(() => isCoolDown = false, ms);
//   }
// };

// let f = debounce(console.log, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
// // На практике debounce полезен для функций, которые получают/обновляют данные, и мы знаем, что повторный вызов в течение короткого промежутка времени не даст ничего нового. Так что лучше не тратить на него ресурсы.


//------------------------------------------------------------------------------------------------------

