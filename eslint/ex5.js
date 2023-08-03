// const ada = {
//   username: 'Adriana',
//   showName() {
//     console.log(this.username);
//   },
// };
// ada.showName();

// const bookShelf = {
//   authors: ['Bernard Cornwell', 'Robert Sheckley'],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };
// console.log(bookShelf.getAuthors());
// bookShelf.addAuthor('Barbara Kornacka');
// console.log(bookShelf.getAuthors());
//-----------------------------------------------------------------------
//This w metodzie obiektu

// const barbara = {
//   username: 'Barbara',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// barbara.showThis();
// barbara.showName();

// function showThis() {
//   console.log('This in showThis: ', this);
// }
// showThis();
// const user = {
//   username: 'Mango',
// };
// user.showContext = showThis;
// user.showContext();
//--------------------------------------------------------------------
//this w funkcjach callbac

// const customer = {
//   firstName: 'Adriana',
//   lastName: 'Nowak',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function getMessage(callbac) {
//   console.log(`Processing request from ${callback()}.`);
// }
// getMessage(customer.getFullName);
//---------------------------------------------------------------------
//this w funkcjach strzałkowych
// foo.call(obj, arg1, arg2, ...);
// const hotel = {
//   username: 'Resort hotel',
//   showThis() {
//     const foo = () => {
//       // Funkcja strzałkowa zapamiętuje kontekst podczas deklaracji,
//       // z zasięgu nadrzędnego
//       console.log('this in foo: ', this);
//     };

//     foo();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}
//--------------------------------------------------------------
//Metoda call()
// foo.call(obj, arg1, arg2,...)

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }
// const mango = {
//   username: 'Mango',
// };
// const poly = {
//   username: 'Poly',
// };

// greetGuest.call(mango, 'Witaj'); // Witaj, Mango.
// greetGuest.call(poly, 'Witaj'); // Witaj, Poly.

//-------------------------------------------------------------------
// Metoda apply
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Mango',
// };
// const poly = {
//   username: 'Poly',
// };

// greetGuest.apply(mango, ['Witaj']); // Witaj, Mango.
// greetGuest.apply(poly, ['Witaj']); // Witaj, Poly.
//-----------------------------------------------------------------
//Metoda bind()
////foo.bind(obj, arg1, arg2, ...)

// function greet(clientName) {
//   return `${clientName}, witaj w «${this.service}».`;
// }

// const steam = {
//   service: 'Steam',
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Mango'); // "Mango, witaj w «Steam»."

// const gmail = {
//   service: 'Gmail',
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Poly'); // "Poly, witaj w «
// Gmail»."
