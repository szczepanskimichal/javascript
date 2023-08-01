// modulo reszta z dzielenia

// 10 / 3 = 3 reszty 1 (3 * 3 + 1)
// console.log(10 / 3); // 3.(3)
// console.log(10 % 3); // 10 / 3 = 3 r (1)
// // console.log(0.3333333 * 3)

// const x = 4;

// if (x % 2 === 1) {
//   console.log('is odd');
// } else {
//   console.log('is even');
// }

//------------------------------------------

// // array

// const arr = [1, 2, 3];
// const arr2 = ['a', 'b'];
// const arr3 = [1, 'a', null];

// // n-dimensions array
// // 3-dimension array
// const arr4 = [
//   [1, 2, [7, 8, 9]],
//   [4, 5, 6],
// ];

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);
// console.log(arr4[0]);
// console.log(arr4[0][2][0]);

// // rarely used
// // const arr5 = new Array('1','2')
// // console.log(arr5)

//-----------------------------
// LOOPING THROUGH ARRAY

// const arr = ['a', 'b', 'c'];

// for (let i = 0; i < arr.length; i++) {
//   const el = arr[i];
//   console.log(`element: ${el}, index: ${i}`);
//   //console.log(el);
// }
// console.log('------------');

// for (const el of arr) {
//   console.log(el);
// }
// console.log('----------');

// const str = 'Hello world';
// for (const char of str) {
//   console.log(char);
// }
// console.log('-------------');
// for (const x of str) {
//   console.log(x);
// }

// const users = ['Ada', 'Marysia', 'Lilly'];

// for (const user of users) {
//   console.log(user);
// }
// console.log(users);

//--------------------------------------------------------------
// array methods split and join

// const arr = ['a', 'b', 'c'];

// //console.log(arr.join(' | '));
// const str = arr.join(' - ');
// console.log(str.split());
// console.log(str.split(' - '));

// const stringOfNumbers = '1,2,3,4,5,6';
// const arrayOfNumbers = stringOfNumbers.split(',');
// console.log(arrayOfNumbers);
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//   arrayOfNumbers[i] = parseInt(arrayOfNumbers[i]) * 10;
// }
// console.log(arrayOfNumbers.join());
// console.log(stringOfNumbers.split(',').join('-'));
//-------------------------------------------------------------
// array methods indexOf
// const arr = ['a', 'b', 'c'];
// console.log(arr.indexOf('c'));
// console.log(arr.indexOf('d')); // -1
//--------------------------------------------------------------
// array methods push pop unshift shift

// const arr = ['a', 'b', 'c'];
// arr.push('d', 'e');
// console.log(arr);

// arr.unshift('d', 'e');
// console.log(arr);

// const lastEl = arr.pop();
// console.log(lastEl);
// console.log(arr);

// const firstEl = arr.shift();
// console.log(firstEl);
// console.log(arr);

// array methods slice

// const arr = ['a', 'b', 'c', 'd'];
// // arr = arr.slice()

// // <1, 3)
// const firstNElements = arr.slice(1, 3);

// console.log(firstNElements);

// console.log(arr);

// const last2Elements = arr.slice(-2);
// console.log(last2Elements);
// const arrCopy = arr.slice(); // copy of the original array
// console.log(arrCopy);
//-----------------------------------------------------------
// array methods splice

// const arr = ['a', 'b', 'c', 'd'];
// //splice(position, numberOfElementsToRemove, el1, el2...)
// console.log(arr);
// // deleting
// arr.splice(1, 2);
// console.log(arr);
// // replacing
// arr.splice(0, 1, 'replace');
// console.log(arr);
// // from index 0
// // delete 1 element
// // add 'replace'
// arr.splice(1, 2, 'replace');
// arr.splice(1, 2, 'replace', 'replace2');

// // adding
// arr.splice(2, 0, 'added', 'added2');
// //from index 2
// //delete nothing
// //add 'added' and 'added2'

// arr.splice(-2, 2); // delete last two elements
// arr.splice(2, 2);
// arr.splice(-2, 1); // delete second to last element
// arr.splice(-2, 1, 'I am new'); // replace second to last element

// console.log(arr);
//----------------------------------------------------------------
// array methods concat

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// // console.log(arr1 + arr2)
// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1));
// console.log(arr1.concat(arr2, arr3));

// console.log(arr1);
//-----------------------------------------------------------------
// functions

const a = 5;
const b = 10;
const c = 0;

// const n = a / b;
// const m = a / c; // Infinity
// console.log(n, m);

// let n;
// if (b === 0) {
//   console.log("Can't devide by zero");
// } else {
//   m = a / c;
//   console.log(m);
// }

// let m;
// if (c === 0) {
//   console.log("Can't divide by zero");
// } else {
//   n = a / c;
//   console.log(m);
// }
// // const multiply = 5; error
// function multiply(a, b) {
//   if (b === 0) {
//     console.log("can't divide by zero");
//   } else {
//     console.log(a / b);
//   }
// }

// multiply(5, 10);
// multiply(10, 15);
// multiply(10, 0);
//---------------------------------------------------------------------
// functions arguments

// function concat() {
//   const concatArr = [];
//   for (let i = 0; i < arguments.length; i++) {
//     for (let aa = 0; aa < arguments[i].length; aa++) {
//       concatArr.push(arguments[i][aa]);
//     }
//   }
//   return concatArr;
// }
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// console.log(concat(arr1, arr2, arr3));
