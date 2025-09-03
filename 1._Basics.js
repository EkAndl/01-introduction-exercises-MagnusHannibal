// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log(`My first name is ${firstName} and my last name is ${lastName}`)
console.log("My first name is", firstName, "and my last name is", lastName);
console.log("My first name is" + firstName, "and my last name is" + lastName);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2024";
const increment = 1;
const currentYearFirst = Number(year) + increment; // Parser year til et number

// Add the year plus the increment
// The result should be 2025
// You cannot touch the first or the second line

console.log(Number(year)+increment) //bad practice to change data in console
console.log(currentYearFirst) // better with predefined values
console.log(+year + increment) // shorthand for Number() basically


const possibleNumber = "123asd1";

console.log(parseInt(possibleNumber)); // returns 123. Number() would return NAN error
// --------------------------------------
