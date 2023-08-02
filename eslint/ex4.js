// // nested objects and arrays
// const obj = {
//   arr: [
//     {
//       prop: 1,
//     },
//     {
//       prop: 2,
//     },
//     {
//       prop: 3,
//     },
//   ],
//   arr2: [
//     {
//       prop: 4,
//     },
//     {
//       prop: 5,
//     },
//     {
//       prop: 6,
//     },
//   ],
// };

// const arr = [
//   {
//     prop: 1,
//   },
//   {
//     prop: 1,
//   },
// ];

// // const arr2 = [{
// //     prop: 1
// //   },
// //   15,
// //   "hello world"
// // ]

// const arr2 = [1, 2, 3];

// // const x = {
// //     prop: 1
// //   }
// // const x = obj.arr[0]
// // console.log(obj.arr[0].prop) // 1
// // console.log(x.prop) // 1

// // console.log(obj['arr'][0])
// // console.log(arr2[0])

// const keys = Object.keys(obj);

// for (key of keys) {
//   const arr = obj[key];
//   for ({ prop } of arr) {
//     console.log(prop);
//   }
// }
//-------------------------------------------
// body of a function
// const products = [
//   {
//     name: 'Radar',
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: 'Scanner',
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: 'Droid',
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: 'Grip',
//     price: 1200,
//     quantity: 9,
//   },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   for (const { name, price, quantity } of products) {
//     if (name === productName) {
//       return price * quantity;
//     }
//   }
//   return 0;
//   // Change code above this line
// }

// console.log(calculateTotalPrice('Blaster')); // zwraca 0
// console.log(calculateTotalPrice('Radar')); // zwraca 5200
// console.log(calculateTotalPrice('Droid')); // zwraca 2800
// console.log(calculateTotalPrice('Grip')); // zwraca 10800
// console.log(calculateTotalPrice('Scanner')); // zwraca 8100

// if (calculateTotalPrice("Blaster") === 0) {
//   return "Success"
// } else {
//   return "Error"
// }
//----------------------------------------------------
// callback

// addition
// multiplication
// function addition(...numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += parseInt(number);
//   }
//   return sum;
// }

// function multiplication(...numbers) {
//   let product = 1;
//   for (const number of numbers) {
//     product *= parseInt(number);
//   }
//   return product;
// }

// // higher order function
// function doMath(operation, ...args) {
//   console.log(`Result of the operation is: ${operation(...args)}`);
// }

// doMath(function () {}, 1, 2, 3);

// console.log(addition(1, 2, 4, '15'));

// // addition - callback
// doMath(addition, 1, 2, 4, '15');
// // multiplication - callback
// doMath(multiplication, 1, 2, 4, '15');

// callback 2

// for (let i = 0; i < 5; i += 1) {
//   console.log(Math.random())
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(Math.random())
// }

// for (let i = 0; i < 3; i += 1) {
//   console.log(`hello ${i}`)
// }

// higher order function
// function repeat(n, cb) {
//   for (let i = 0; i < n; i += 1) {
//     cb(i);
//   }
// }

// // anonymous function
// repeat(5, function () {
//   console.log(Math.random());
// });

// repeat(10, function () {
//   console.log(Math.random());
// });

// function hello(i) {
//   console.log(`hello ${i}`);
// }

// repeat(3, hello);
//-------------------------------------
//// for each

// const arr = [5, 1, 2, 3, 4, 2, 2, 4, 5, 3];

// arr.forEach((element, index, array) => {
//   console.log(element);
//   console.log(index);
//   // console.log(array) // rarely used
//   // console.log(array[index])
//   console.log('--------');
//   //   break; // does not work
//   //   continue; // does not work
// });
//-------------------------------
// arrow function

// function foo(param) {
//   return `return value ${param}`
// }

// console.log(foo("param Value"))

// () => {}
// () => 0

// const foo = (param) => {
//   return `return value ${param}`
// }

// const foo = param => `return value ${param}`

// console.log(foo("param Value"))
//-----------------------------------------------------------------
// arrow function syntax cases

// function foo1(param) {
//   return param;
// }

// const foo2 = (param) => param;

// const foo3 = (param) => param;

// const foo4 = (param) => {
//   return param;
// };

// const foo5 = (param) => {
//   return param;
// };

// // const foo6 = param1, param2 => `${param1} ${param2}` // error
// const foo6 = (param1, param2) => `${param1} ${param2}`;
// const foo7 = (param1, param2) => {
//   return `${param1} ${param2}`;
// };

// const foo8 = (param) => {
//   console.log('called');
//   return 'foo8';
// };

// const foo8 = (param) => console.log("called")
// return 'foo8' // error
//--------------------------------------------------------------
// arrow function arguments

// const foo = (...args) => {
//   console.log(arguments);
//   console.log(args);
// };

// foo(1, 2, 3); // empty
//----------------------------------------------------------------
// arrow function application

// const numbers = [1, 2, 3, 4, 523423, 4, 235, 23, 5, 23, 634, 634];

// numbers.forEach(function (number, index) {
//   console.log(`Index: ${index}, number: ${number}`);
// });

// numbers.forEach((number, index) =>
//   console.log(`Index: ${index}, number: ${number}`)
// );

// const logMessage = (number, index) =>
//   console.log(`Index: ${index}, number: ${number}`);

// numbers.forEach(logMessage);

// arrow function application 2

// function round(number, digits) {
//   return Math.floor(number * Math.pow(10, digits)) / Math.pow(10, digits)
// }

// const round = (number, digits = 2) =>
//   Math.floor(number * Math.pow(10, digits)) / Math.pow(10, digits);

// console.log(round(1 / 3, 2));
// // 0.333333333 * 10^2 => 33.333333
// // floor(33.333333) => 33
// // 33 / 10^2 => 0.33

// arrow function application 3

// function safeDivide(a, b) {
//   if (b === 0) {
//     return 0;
//   }
//   return a / b;
// }

// // function safeDivide(a, b) {
// //   return b === 0 ? 0 : a / b
// // }

// const safeDivide = (a, b) => (b === 0 ? 0 : a / b);

// // const safeDivide = function(a, b) {
// //   return b === 0 ? 0 : a / b
// // }
//---------------------------------------------------------
//Funkcja wywołania zwrotnego
// function greet(name) {
//   return `Pozdrawiam ${name}.`;
// }

// // Wywołaj funkcję greet i wyświetl jej wynik w konsoli
// console.log(greet('Mango')); // Pozdrawiam Mango.

// // Wyświetl funkcję greet w konsoli bez jej wywoływania
// console.log(greet); // ƒ greet() { return `Pozdrawiam ${name}.`; }
//-----------------------------------------------------------
//callback
// function greet(name) {
//   console.log(`Velkomen ${name} :)`);
// }
// function registerGuest(name, callback) {
//   console.log(`gjesteregistrering ${name}`);
//   callback(name);
// }

// registerGuest('Adriana', greet);
//------------------------------------------------------------
//Wywołania zwrotne inline

// function registerGuest(name, callback) {
//   console.log(`Gjesteregistrering ${name}.`);
//   callback(name);
// }
// // Przekaż funkcję inline greet jako wywołanie zwrotne(CALLBACK!!!)
// registerGuest('Adriana', function greet(name) {
//   console.log(`Hilser ${name}`);
// });
// // Przekaż funkcję inline notify jako wywołanie zwrotne
// registerGuest('Marysia', function notify(name) {
//   console.log(`Kjære ${name}, Rommet ditt vil være klart om 30 minutter.`);
// });

//Kilka wywołań zwrotnych!!!!

//najpierw funkcja dla pojasnienia

// function processCall(recipient) {
//   // Symuluj dostępność abonenta za pomocą liczby losowej
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Abonent ${recipient} jest niedostępny, zostaw wiadomość.`);
//     // Logika aktywacji automatycznej sekretarki
//   } else {
//     console.log(`Łączenie z ${recipient}, proszę czekać...`);
//     // Logika odbierania połączenia
//   }
// }

// //processCall('Mango');

// //REFAKTOR PROCESScALL

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Symuluj dostępność abonenta za pomocą liczby losowej
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Łączenie z ${name}, proszę czekać...`);
//   // Logika odbierania połączenia
// }

// function activateAnsweringMachine(name) {
//   console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
//   // Logika aktywacji automatycznej sekretarki
// }

// function leaveHoloMessage(name) {
//   console.log(`Abonent ${name} jest niedostępny, nagraj hologram.`);
//   // Logika nagrywania hologramu
// }

// processCall('Poly', takeCall, activateAnsweringMachine);
// processCall('Mango', takeCall, leaveHoloMessage);

//---------------------------------------------------------------
//Abstrakcja powtórzeń

// for (let i = 1; i < 20; i += 1) {
//   console.log(i);
// }
// function repeatLog(n) {
//   for (let i = 1; i < 10; i += 1) {
//     console.log(i);
//   }
// }
// repeatLog(100);

// function printValue(value) {
//   console.log(value);
// }
// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }
// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }
// repeat(3, printValue);
// repeat(3, prettyPrint);
//-------------------------------------------------------------------

//Metoda forEach
// const numbers = [5, 10, 15, 'Adriana', 25];

// // Klasyczny for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Indeks ${i}, wartość ${numbers[i]}`);
// // }
// // Iterujący forEach
// numbers.forEach(function (number, index) {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });
// Jedynym warunkiem, pod którym należy użyć pętli for lub for...of do iteracji po tablicy, jest konieczność przerwania pętli. Nie możesz w łatwy sposób przerwać wykonywania metody forEach, domyślnie iteruje po tablicy do końca. Słowa kluczowe break i continue nie działają w pętli forEach!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//--------------------------------------------------------------------
//Funkcje strzałek

// "Normalna" deklaracja funkcji
// function classicFunkcja(a, b, c) {
//   return a + b + c;
// }
// console.log(classicFunkcja(1, 2, 3));
// // To samo w postaci arrow function
// const arrowFunkcja = (a, b, c) => {
//   return a + b + c;
// };
// console.log(arrowFunkcja(1, 2, 'Ada'));
// const add = (a) => {
//   return a + 5;
// };
// console.log(add(3));
// console.log(add('Ada'));
// const greet = () => {
//   console.log('Cześć!');
// };
// greet();
//-------------------------------------------------------------------
//Funkcje strzałkowe jak callback

const numbers = [5, 10, 15, 20, 25];
// Anonimowa funkcja strzałkowa
numbers.forEach((number, index) => {
  console.log(`Indeks ${index}, wartość ${number}`);
});

const logMessage = (number, index) => {
  console.log(`Indeks ${index}, wartość ${number}`);
};

numbers.forEach(logMessage);
