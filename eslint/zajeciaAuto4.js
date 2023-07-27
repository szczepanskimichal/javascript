// function greet(name) {
//   return `Witaj ${name}`;
// }
// console.log(greet('Michal'));
//--------------------------------------------------------------
// Funkcja wywołania zwrotnego
// function greet(name) {
//   console.log(`Pozdrawiam ${name}.`);
// }

// // Funkcja wyższego rzędu
// function registerGuest(name, callback) {
//   console.log(`Rejestracja gościa ${name}.`);
//   callback(name);
// }

// registerGuest('Michal', greet); // jak wywolasz to z cl to dostaniesz undefined a tak niechcemy
//--------------------------------------------------------------
// Wywołania zwrotne inline

// function registerGuest(name, callback) {
//   console.log(`Rejestracja goscia ${name}`);
//   callback(name);
// }
// //Przekazuje funkcje inline greet jako wywolanie zwrotne
// registerGuest('Mango', function greet(name) {
//   console.log(`Pozdrawiam ${name}.`);
// });
// //Przekazuje funkcje inline notify jako wywolanie zwrotne

// registerGuest('Adriana', function notify(name) {
//   console.log(
//     `Szanowny(a) ${name}, Pana/Pani pokoj bedzie gotowy za 30 minut.`
//   );
// });

//--------------------------------------------------------------
// Kilka wywołań zwrotnych

// function processCall(recipent) {
//   // Symuluj dostępność abonenta za pomocą liczby losowej
//   const isRecipentAvailable = Math.random() > 0.5;

//   if (!isRecipentAvailable) {
//     console.log(`Abonent ${recipent} jest niedostępny, zostaw wiadomość.`);
//   } else {
//     console.log(`Łączenie z ${recipent}, proszę czekać...`);
//   }
// }
// processCall('Ada');

//--------------------------------------------------------------
// refakor funkcji wyzej

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

// processCall('Mango', takeCall, activateAnsweringMachine);
// processCall('Poly', takeCall, leaveHoloMessage);
//--------------------------------------------------------------

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

// // Przekaż printValue jako funkcję zwrotną
// repeat(5, printValue);
// // 0
// // 1
// // 2

// // Przekaż prettyPrint jako funkcję zwrotną
// repeat(10, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

//--------------------------------------------------------------
//Metoda forEach
// Metoda do iteracji, zawarta w tablicach i używana jako zamiennik pętli for i for...of podczas pracy z kolekcją danych.

// tablica.forEach(function callback(element, index, array) {
//     // Ciało funkcji zwrotnej
// });

// const numbers = [5, 10, 15, 20, 25];
// //Klasyczny for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Indeks ${i}, wartość ${numbers[i]}`);
// }

// // Iterujący forEach
// numbers.forEach(function (number, index) {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });

//--------------------------------------------------------------
const students = [
  { name: 'Mango', score: 83, courses: ['matematyka', 'fizyka'] },
  { name: 'Poly', score: 59, courses: ['informatyka', 'matematyka'] },
  { name: 'Ajax', score: 37, courses: ['fizyka', 'biologia'] },
  { name: 'Kiwi', score: 94, courses: ['literatura', 'informatyka'] },
];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ['Ajax', 'Poly', 'Mango', 'Kiwi']

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);

// console.log(names); // ['Ajax', 'Poly', 'Mango', 'Kiwi']

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses);

//--------------------------------------------------------------

// Funkcje strzałek

// "Normalna" deklaracja funkcji
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// To samo w postaci arrow function
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// console.log(arrowAdd(1, 2, 3));
//--------------------------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Indeks ${index}, wartość ${number}`);
// };
// numbers.forEach(logMessage);

//--------------------------------------------------------------

//--------------------------------------------------------------
// const add = (...args) => {
//   console.log(args);
// };

// add('m', 'michal', 3); // [1, 2, 3]

//--------------------------------------------------------------

// // function context this

// const maciej = {
//     username: "Maciej",
//     showName() {
//       //  const this = maciej
//       console.log(this)
//       console.log(this.username)
//     }
//   }

//   const anna = {
//     username: "Anna",
//     nationality: {
//       code: "PL",
//       // worse
//       showNationality() {
//         console.log(this.code)
//       }
//     },
//     // better
//     showNationality() {
//       console.log(this.nationality.code)
//     },
//     showName() {
//       //  const this = anna
//       console.log(this)
//       console.log(this.username)
//     }
//   }

//   // maciej.showName()
//   // anna.showName()

//   anna.nationality.showNationality() // "PL"
//   anna.showNationality() // "PL"

// bind
// 'use strict'

// function greet(clientName) {
//   console.log(`${clientName}, welcome to ${this.service}`)
// }

// const steam = {
//     service: "Steam"
// }

// const gmail = {
//     service: "Google Gmail"
// }

// // greet.call(steam, "Jakub")

// // bind without arguments, more universal
// const greetAtSteam = greet.bind(steam)
// // console.log(typeof greetAtSteam)
// greetAtSteam("Jakub")

// // bind with arguments
// const greetAtSteamJakub = greet.bind(steam, "Jakub")
// // console.log(typeof greetAtSteamJakub)
// greetAtSteamJakub()

// bind in object methods
// 'use strict'

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function logInfo(cb) {
//   console.log(`[LOG][INFO] ${cb()}`)
// }

// logInfo(customer.getFullName.bind(customer))

// // logInfo(customer.getFullName) // global context (window || undefined)

// bind in object methods extended
// 'use strict'

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };

//   const customer2 = {
//     firstName: "Weronika",
//     lastName: "Smith",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };

//   function logInfo(cb) {
//     console.log(`[LOG][INFO] ${cb()}`)
//   }

//   logInfo(customer.getFullName.bind(customer)) // this = customer
//   logInfo(customer2.getFullName.bind(customer2)) // this = customer2

// logInfo(customer.getFullName) // global context (window || undefined)
// logInfo(function() {
//   return `${this.firstName} ${this.lastName}`
// }) // global context (window || undefined)
// window.firstName

// logInfo(() => "arrow function return")

// function outside of callback logic

// function onOrderError(error) {
//     return `Error! ${error}`;
//   }

//   console.log(onOrderError('treść błędu'))

// callback example

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   // higher order function
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       // onSuccess === makePizza ||
//       // onSuccess === deliverPizza
//       return onSuccess(pizzaName);
//     }
//     // onError === onOrderError ||
//     // onError === anonymous arrows function
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// Change code above this line

// Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function deliverPizza(name) {
//   return `Your order is being delivered: ${name}.`;
// }

// Callback for onError
// onError === onOrderError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// Method calls with callbacks
// pizzaPalace.order() => makePizza() => this is passed to console log
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', deliverPizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, (err) => `${err}`));
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function context this 2

// const bookShelf = {
//   authors: ['J.R.R Tolkien'],
//   getAuthors() {
//     return this.authors; // bookShelf.authors
//   },
//   addAuthor(authorName) {
//     if (authorName && typeof authorName === 'string') {
//       this.authors.push(authorName); // bookShelf.authors.push(authorName)
//     }
//   },
// };

// bookShelf.authors.push('J.K Rowling');
// bookShelf.addAuthor('J.K Rowling');

// bookShelf.authors.push('');
// bookShelf.addAuthor(''); // no effect
// bookShelf.addAuthor(null); // effect

// console.log(bookShelf.getAuthors());

// // this global browser
// ('use strict');
// function foo() {
//   console.log(this); // window || undefined
// }

// console.log(this); // window || undefined
// foo();

// // console.log(window)

// // this in object

// const maciej = {
//   username: 'Maciej',
//   //   username2: this, // window
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// maciej.showThis();
// maciej.showName();

// // this in arrow function

// ('use strict');

// function showThisFn(n) {
//   console.log('this is in showThisFn', this, n, '-----');
// }

// const showThisArrow = (n) => {
//   console.log('this is in showThisArrow', this, n, '-----');
// };

// const user = {
//   username: 'Mango',
// };

// user.showContext = showThisArrow;
// user.showThisFn = showThisFn;

// // showThisArrow(10) // window || undefined
// showThisFn(20); // window || undefined
// // user.showContext(15) // window || undefined
// user.showThisFn(25); // object

// // functions using functions

// function bar() {
//   return 'bar result';
// }

// function foo() {
//   return bar();
// }

// console.log(foo());

// // this in arrow functions 2

// ('use strict');

// const hotel = {
//   username: 'Resort hotel',
//   showThis() {
//     const foo = () => {
//       console.log('this in foo', this); // object context
//     };
//     foo();
//     console.log('--------');
//     console.log('this in showThis', this); // object context
//   },
//   //   arrowProp: () => {
//   //     console.log("this in arrow prop", this) // global context
//   //   }
// };

// // hotel.arrowProp = () => {
// //   console.log("this in arrow prop", this) // global context
// // }

// hotel.fnProp = function () {
//   console.log('this in fnProp', this); // object context
// };

// // hotel.showThis()

// // hotel.arrowProp()

// hotel.fnProp();

// // call and apply
// ('use strict');

// function greetGuest(greeting, postGreeting) {
//   console.log(`${greeting}, ${this.username}, ${postGreeting}`);
// }

// const jakub = {
//   username: 'Jakub',
// };

// const mateusz = {
//   username: 'Mateusz',
// };

// greetGuest.call(jakub, 'hello', 'Have a nice stay!'); // C - comma - przecinek
// greetGuest.apply(mateusz, ['Cześć', 'Miłego pobytu']); // A - array - tablica
