/*jshint esversion: 6 */

// constant - the value of a variable shouldn't change. Helps protect variables from being reassigned

const pi = 3.14159;

//Trying to re-assign will generate an error:
//pi = 3.14

// Setting a complex object, like an array or object literal {}, to a const variable will still allow you to modify the object

const days = ['Monday'];

//There will be no error thrown from modifying this array
days.push('Tuesday');

//But if you re-assign it completely, it will still throw an error
// days = ['Friday'];


