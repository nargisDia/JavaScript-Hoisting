// JavaScript Hoisting

// person = 'Nargis diya';
// console.log(typeof person);


// Declaration
var x;

// Initialization
x = 10;

// Usage
console.log(x);

/*
let y = 20;
console.log(y);
*/

/*
z = 30;
console.log(z);
var z;

let game;
console.log(game);

game = 'football';
console.log(game);

*/

// game = 'football';
// console.log(game);
//let game;
const game = 'football';
console.log(game);


// Function hoisting
car('r15');
function car(bike) {
    console.log(`I love to have a ${bike}`);
}
//car('r15');


student('diya');
let student = function (fname) {
    console.log(`My name is ${fname}`);
}
//student('diya');