// whole-script strict mode syntax
// JavaScript is very flexible
//  flexible === dangerous
//  added ECMAScript5
'use strict'
console.log(age);
// 2. Variable
//  let (added in ES6)
let globalName = 'global name';

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Contants
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primittive, single item: number, string, boolean, null, undefinde, symbol
//  object, box container
//  function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`vlaue: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


// number - special numberic values: infinity, - infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123243445456676545634545324234314n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);