// parameters and arguments

// param1, param2, param3 -> parameters
// function foo(param1, param2, param3) {
//   // arguments
// }

// // 1, 2, 3 -> arguments
// foo(1, 2, 3);

// objects intro

// const key = 'pageCount';
// const bookObj = {
//   // key: value -> prop / property
//   title: 'The Hobbit',
//   'is for kids': true,
//   [`${key}`]: 500,
//   5: 10,
//   author: {
//     firstName: 'J.R.R',
//     secondName: 'Tolkien',
//   },
//   genres: ['fantasy', 'kid fantasy'],
// };

// // console.log(bookObj)
// // console.log(typeof bookObj)

// const title = bookObj.title;
// console.log(title);
// console.log(bookObj.title);

// console.log(bookObj.pageCount);
// // console.log(bookObj[pageCount]) // syntax error
// console.log(bookObj['pageCount']);
// console.log(bookObj[key]);

// console.log(bookObj['is for kids']);
// // console.log(bookObj.'is for kids') // syntax error
// // console.log(bookObj[is for kids]) // syntax error

// console.log(bookObj.author.firstName);
// console.log(bookObj.author['firstName']);
// console.log(bookObj['author']['firstName']);
// console.log(bookObj['author'].firstName);

// console.log(bookObj.isbn); // undefined
// // console.log(bookObj.author.nationality.countryCode) // syntax error
// // console.log(bookObj.price.pln)

// // modyfing prop
// bookObj.title = 'Lord of the Rings';
// // adding new prop
// bookObj.price = 25;
// // deleting prop
// delete bookObj['5'];

// // reference
// const author = bookObj.author;
// author.height = 180;

// console.log(bookObj);
//-----------------------------------------------------------------------
// reference

// function foo(param) {
//   param.a = 15;
// }

// const arg = {
//   a: 10,
// };

// console.log(arg);
// foo(arg);
// console.log(arg);
//----------------------------------------------------------------------
// shorthands

// function objectifyBook(name, title, pageCount) {
//   return {
//     // name: name,
//     name,
//     title,
//     pageCount,
//   };
// }

// const obj1 = objectifyBook('J.R.R Tolkien', 'The Hobbit', 500);
// console.log(obj1);
//-----------------------------------------------------------------------
// computed properties

// function objectifyBook(propName, propValue) {
//   return {
//     [propName]: propValue,
//     propValue,
//   };
// }

// const obj1 = objectifyBook('nazwa propsa', 500);
// console.log(obj1);
//-------------------------------------------------------------------
// object methods

// function createBook(title, author) {
//   return {
//     title,
//     author,
//     setTitle(title) {
//       this.title = title;
//     },
//   };
// }

// const book = createBook('Wiedźmin', 'Andrzej Sapkowski');
// const book2 = createBook('50 Shades of Grey', 'E. L. James');

// // {
// //   title: 'Wiedźmin',
// //   author: 'Andrzej Sapkowski',
// //   // method
// //   setTitle(title) {
// //     book.title = title
// //   }
// // }

// console.log(book);

// book.setTitle('Krew Elfów');
// book2.setTitle('51 Shades of Grey');

// console.log(book);
// console.log(book2);
//----------------------------------------------------------------
// this

// const obj1 = {
//   a: 50,
//   modifyA(n) {
//     this.a = n;
//     // obj1.a = n
//   },
// };

// obj1.modifyA(100);
// console.log(obj1);
//-----------------------------------------------------------------
// Object keys

// Number.parseInt()
// Math.min()

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// //console.log(Object.keys(book));

// const bookKeys = Object.keys(book);

// for (const key of bookKeys) {
//   console.log(key);
//   //   console.log(book[key])
// }

// // for (const key of Object.keys(book)) {
// //   console.log(book[key])
// // }
//-----------------------------------------------------------------
// Object values

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// const bookValues = Object.values(book);

// for (const value of bookValues) {
//   console.log(value);
// }
//------------------------------------------------------------------
// computed properties 2

// function createRTV(nameOfProduct, flags) {
//   const obj = {
//     nameOfProduct,
//   };

//   // obj.soldOut = true
//   // obj.expositionAvailable = true
//   // obj.damaged = true
//   for (flag of flags.split(',')) {
//     obj[flag] = true;
//   }

//   return obj;
// }

// const lg = createRTV("LG 42'", 'soldOut,expositionAvailable,damaged');
// const samsung = createRTV("Samsung 50'", 'expositionAvailable');

// console.log(lg);
// console.log(samsung);

// rename
// lg.name = lg.nameOfProduct;
// delete lg.name;
//----------------------------------------------------------------------
// array of objects

// const bookShelf = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'Sen śmiesznego człowieka',
//     author: 'Fiodor Dostojewski',
//     rating: 7.75,
//   },
// ];

// // for (const book of bookShelf) {
// //   console.log(book.title);
// //   console.log(Object.keys(book));
// //   console.log('-----');
// // }

// for (let i = 0; i < bookShelf.length; i++) {
//   console.log(bookShelf[i].title);
//   console.log(Object.keys(bookShelf[i]));
//   console.log('-----');
// }

// let totalRating = 0;

// for (const book of bookShelf) {
//   totalRating += book.rating;
// }

// function round(a) {
//   return Math.floor(a * 100) / 100;
// }

// console.log(round(totalRating / bookShelf.length));
//---------------------------------------------------------------------
// for in

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Klucz
//   console.log(key);
//   // Wartość właściwości pod tym kluczem
//   console.log(book[key]);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4
//---------------------------------------------------------------------
// reference 2

// const bookShelf = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'Sen śmiesznego człowieka',
//     author: 'Fiodor Dostojewski',
//     rating: 7.75,
//   },
// ];

// const book1 = bookShelf[0]; // reference
// let book1Title = book1.title; // no reference // primitive
// let book1Rating = book1.rating; // no reference // primitive

// // book1.title = "Hobbit"
// bookShelf[0].title = 'Hobbit';
// book1Title = 'LotR';
// book1Rating = 5;
// console.log(book1Title);
// console.log(book1Rating);
// console.log(book1);
// console.log(bookShelf[0]);
//-----------------------------------
// function scope

// const a = 5;
// // a - global variable
// // b - param
// // c - local variable
// function foo(b) {
//   const c = 10;
//   console.log(a + b + c);
// }

// foo(15);
//------------------------------
// fun error
// const shops = ['id1', 'id2'];

// const selectedShop = 'id1';

// if (shops.includes[selectedShop] || shops.length === 0) {
//   console.log('true');
// } else {
//   console.log('false');
// }
