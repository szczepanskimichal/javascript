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

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  // higher order function
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      // onSuccess === makePizza ||
      // onSuccess === deliverPizza
      return onSuccess(pizzaName);
    }
    // onError === onOrderError ||
    // onError === anonymous arrows function
    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function deliverPizza(name) {
  return `Your order is being delivered: ${name}.`;
}

// Callback for onError
// onError === onOrderError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
// pizzaPalace.order() => makePizza() => this is passed to console log
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', deliverPizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, (err) => `${err}`));
pizzaPalace.order('Vienna', makePizza, onOrderError);

// function context this 2

const bookShelf = {
  authors: ['J.R.R Tolkien'],
  getAuthors() {
    return this.authors; // bookShelf.authors
  },
  addAuthor(authorName) {
    if (authorName && typeof authorName === 'string') {
      this.authors.push(authorName); // bookShelf.authors.push(authorName)
    }
  },
};

bookShelf.authors.push('J.K Rowling');
bookShelf.addAuthor('J.K Rowling');

bookShelf.authors.push('');
bookShelf.addAuthor(''); // no effect
bookShelf.addAuthor(null); // effect

console.log(bookShelf.getAuthors());

// this global browser
('use strict');
function foo() {
  console.log(this); // window || undefined
}

console.log(this); // window || undefined
foo();

// console.log(window)

// this in object

const maciej = {
  username: 'Maciej',
  //   username2: this, // window
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.username);
  },
};

maciej.showThis();
maciej.showName();

// this in arrow function

('use strict');

function showThisFn(n) {
  console.log('this is in showThisFn', this, n, '-----');
}

const showThisArrow = (n) => {
  console.log('this is in showThisArrow', this, n, '-----');
};

const user = {
  username: 'Mango',
};

user.showContext = showThisArrow;
user.showThisFn = showThisFn;

// showThisArrow(10) // window || undefined
showThisFn(20); // window || undefined
// user.showContext(15) // window || undefined
user.showThisFn(25); // object

// functions using functions

function bar() {
  return 'bar result';
}

function foo() {
  return bar();
}

console.log(foo());

// this in arrow functions 2

('use strict');

const hotel = {
  username: 'Resort hotel',
  showThis() {
    const foo = () => {
      console.log('this in foo', this); // object context
    };
    foo();
    console.log('--------');
    console.log('this in showThis', this); // object context
  },
  //   arrowProp: () => {
  //     console.log("this in arrow prop", this) // global context
  //   }
};

// hotel.arrowProp = () => {
//   console.log("this in arrow prop", this) // global context
// }

hotel.fnProp = function () {
  console.log('this in fnProp', this); // object context
};

// hotel.showThis()

// hotel.arrowProp()

hotel.fnProp();

// call and apply
('use strict');

function greetGuest(greeting, postGreeting) {
  console.log(`${greeting}, ${this.username}, ${postGreeting}`);
}

const jakub = {
  username: 'Jakub',
};

const mateusz = {
  username: 'Mateusz',
};

greetGuest.call(jakub, 'hello', 'Have a nice stay!'); // C - comma - przecinek
greetGuest.apply(mateusz, ['Cześć', 'Miłego pobytu']); // A - array - tablica
