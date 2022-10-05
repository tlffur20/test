// 1. String conatenation
console.log('my' + ' car');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

let counter = 2;
const preIncrement = ++counter;
//  counter = counter + 1;
//  preIncrement = counter;
console.log(`preIncrement = ${preIncrement} , counter = ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter +1;
console.log(`postIncrement = ${postIncrement}, counter = ${counter}`)

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; 

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++){
        // wasing time
        console.log('😜');
    }
    return true;
}

//  8. if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcom, Ellie!');
    } else if (name === 'coder') {
        console.log('You are amazing coder');
    } else {
        console.log('unknown');
    }

console.log(name=== 'ellie' ? 'yes' : 'no');


// 11. Loops
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--; 
} while ( i > 0);

for (i = 3; i >0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i> 0; i = i -2){
    console.log(`incline variable for: ${i}`);
}

// for (let i = 0; i < 10; i++){
//     for (let j = 0; j < 10; j++){
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }


for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1: ${i}`);
    }
}

for(let i = 0; i < 11; i++) {
    if ( i > 8) {
        break;
    }
    console.log(`q2: ${i}`);
}

