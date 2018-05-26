/*jshint esversion: 6 */

const name = 'John';

//ES5 function declaration
function sayName() {
  var message = 'My name is ' + name;
  console.log(message);
}

function sayBye() {
  console.log('Bye ' + name);
}

//ES5 function expression
var sayName = function() {
  var message = 'My name is ' + name;
  console.log(message);
};

var sayBye = function() {
  console.log('Bye ' + name);
};

//ES6 arrow functions (these are considered function expressions)
const sayName = () => {
  const message = 'My name is ' + name;
  console.log(message);
};

const sayBye = () => {
  console.log('Bye ' + name);
};

//arrow functions with single arguments
const square = (x) => x * x;

const cube = (x) => square(x) * x;

// if a function takes only a single argument, you don't have to include paranetheses when you create it

const add = x => x + x;

//notice that you also don't need to include the return keyword(or even curly braces), but only if the function only takes up one line

const subtract = x => x - x;

const multiply = (a, b) => {
  console.log('Multiplying');
  return a * b;
};
