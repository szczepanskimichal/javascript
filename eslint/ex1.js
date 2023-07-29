// // variables
// const x = 15;
// let y = 'hello world';

// console.log(x);
// console.log(y);

// //const

// const a = 5;
// let b = 1;
// //b = b + 5;
// b += 5;
// console.log(b);

//Number

// let x = 5;
// x = 'Hello World';
// console.log(x);

// const a = 5;
// const b = '20';

// console.log(a + b);
// console.log(b + a);

// // casting, parsing, rzutowanie

// // parseInt(number)
// // parseFloat(number)
// // Number.parseInt(number)
// // Number.parseFloat(number)

// console.log(parseInt('50')); // 50
// console.log(typeof parseInt('50')); // number
// console.log(parseInt('abc')); // NaN - Not a Number
// console.log(parseInt('abc') * 10); // NaN * Number => Not a Number
// console.log(typeof parseInt('abc'));

// console.log(parseFloat('50.4'));
// console.log(parseFloat('50,4'));
// console.log(typeof parseFloat('50.4'));

// weird behaviours of numbers

// const x = '2' + 3 * 10;
// console.log(x);
// console.log(typeof x);
// // "2" + 3 => konkatenację "23"
// // "23" * 10 => '230'

// // + -> number + number => math operation addition
// // + -> string + number => concatenation

// console.log(2 + 3 * 10);
// console.log(2 + 3 / 10);

// console.log('1' + 3 + 10);
// // "1" + 3 => "13"
// // "13" + 10 => "1310"

// console.log('1' - 1);

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// console.log(('1' + 3) * 10);

// console.log(Math.floor((0.1 + 0.2) * 10) / 10);
// // 0.1 + 0.2 ~~ 0.3000000004
// // 0.3000000004 * 10
// // 3.000000004 => floor
// // 3 => / 10
// // 0.3

// console.log(Math.floor(5.5)); // 5
// console.log(Math.ceil(5.5)); // 6
// console.log(Math.round(5.4)); // 5
// console.log(Math.round(5.5)); // 6
// console.log(Math.round(5.6)); // 6

// string

// '', "", ``
// grawis, backtick, ciapek
const username = 'Maaaaaango452#$#@ąĘŻ';
// const name = 'It's me' // syntax error
// const "this character is " " // syntax error

// console.log(username.length);
// console.log(username[0]);
// console.log(username[username.length - 1]);

// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

// console.log(username.indexOf('go')); // 3
// console.log(username.indexOf('gofdsafa')); // -1

// console.log(username.includes('go')); // true
// console.log(username.includes('GO')); // false

// console.log('GO' === 'go'); // false

// console.log(username.startsWith('Mango')); // false
// console.log(username.startsWith('m')); // false

// console.log(username.endsWith('ąĘŻ')); // true
// console.log(username.endsWith('ąĘż')); // false

// console.log(username.replace('Mango', 'Apple'));
// console.log(username);
// console.log(username.replaceAll('a', '-'));

// console.log(username.slice(0, 4)); // from 0 index to 4 index excluding 4
// console.log(username.slice(-5)); // last 5 characters

// const x = 'mama';

// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);
// console.log(x[3]);

// console.log(x.replace('a', '-'));
// console.log(x.replaceAll('a', '-'));

// equality and math operators

// === exact match
// do not use
// ==
// !==
// do not use
// !=

// console.log("5" == 5) // true
// console.log("5" === 5) // false

// console.log("5" != 5) // false
// console.log("5" !== 5) // true

// console.log('abc' === 'abc'); // true
// console.log(true === true); // true
// console.log(null === null); // true
// console.log(NaN === NaN); // false
// console.log(undefined === undefined); // true
// console.log([1, 2] === [1, 2]); // false

// const x = 5;
// const y = 10;
// const z = 10;
// x greater than y
// console.log(x > y) // false
// x lesser than y
// console.log(x < y) // true

// y greater or equal z
// console.log(y >= z) // true
// y lesser or equal z
// console.log(y <= z) // true

// logical operators OR

// || - OR

// let age = 20;
// console.log(age < 10 || age > 30);
// // age < 10 => false
// // age > 30 => false
// // false || false
// // false
// age = 9;
// console.log(age < 10 || age > 30);
// // age < 10 => true
// // age > 30 => false
// // true || false
// // true

// console.log(5 || 10); // 5 - first truth-y expression
// console.log(null || 5); // 5 - first truth-y expression
// // null => false-y

// const x = 0;
// const z = 10;
// const y = x || z;
// console.log(y);

// logical operators AND

// && - AND

// const a = 10;
// const b = 15;

// console.log(a > 5 && b < 20);
// // a > 5 => true
// // b < 20 => true
// // true && true => true

// console.log(a > 5 && 'Hello World');

// // little clunky
// a > 5 && console.log('Test');

// NO

// console.log(!true); // true => false
// console.log(!false); // !false => true
// console.log(!'5'); // truthy => false
// console.log(!0); // !falsey => true
// console.log(!'0'); // !truthy => false
// console.log(!''); // !falsey => true

// const x = 5;
// const y = 0;
// const xBool = !!x; // !!truthy => true
// const yBool = !!y; // !!falsey => false

// console.log(xBool);
// console.log(yBool);

// number to string and string literals

// const x = 5;
// const y = 'robots';

// const msg = `You ordered ${x} of ${y}`;
// const msgAlt = 'You ordered ' + x + ' of ' + y;

// console.log(msg);
// console.log(msgAlt);
// if else

// let cost = 15;
// if (cost === 0) {
//   console.log('service is free');
// }

// // if...else
// if (cost === 0) {
//   console.log('service is free');
// } else {
//   console.log('service is paid');
// }

// if...elseif
// if (cost === 0) {
//   console.log('service is free');
// } else if (cost <= 10) {
//   console.log('this service is cheap');
// } else if (cost > 10 && cost < 100) {
//   console.log('this service is somewhat expensive');
// } else {
//   console.log('this service is expensive');
// }

// for
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue;
//   }
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

// 1st loop -> i === 0
// after 1st loop i++ => i === 1

// 2st loop -> i === 1
// after 2st loop i++ => i === 2

// ...
// i === 5 -> i < 5 => false
// break loop

// switch

// let cost = 350;

// switch (cost) {
//   case 100: // cost === 100
//     console.log('bronze');
//     break;

//   case 200: // cost === 200
//     console.log('platinum');
//     break;

//   case 300:
//   case 400:
//     console.log('gold');

//   case 150:
//     console.log('dog');
//     break;
//   case 50:
//   default:
//     console.log('unknown');
// }
