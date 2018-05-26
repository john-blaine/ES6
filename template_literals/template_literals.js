/*jshint esversion: 6 */

const singleQuotes = '<p>Single quotes</p>';
const doubleQuotes = "<p>Double quotes</p>";
const templateLiteral = `<p>Template Literal</p>`;

const result = singleQuotes + doubleQuotes + templateLiteral;
document.querySelector('.basic').innerHTML = result;

//unordered list without template literals
// const fruitList = '<ul>' +
//                     '<li>Kiwi</li>' +
//                     '<li>Lime</li>' +
//                     '<li>Pineapple</li>' +
//                   '</ul>';

//unorddered list with template literals
const fruitList = `
  <ul>
    <li>Kiwi</li>
    <li>Lime</li>
    <li>Pineapple</li>
  </ul>
`;

document.querySelector('.fruits').innerHTML = fruitList;

let like = (thing) => 'I like ' + thing;

//here we are using interpolation
let love = (thing) => `I love ${thing}`;

const sentence = `<p>${like('pugs')}, but ${love('my girls')}</p>`;

const sentence2 = `<p>${thing('pugs')}</p>`;

const result2 = sentence + sentence2;

document.querySelector('.interpolation').innerHTML = result2;

//this function declaration gets hoisted to the top e.g. loaded into memory before any code is executed during the compiler step
function thing(thing) {return `I like ${thing}`;}
