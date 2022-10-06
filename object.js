'use strict'

// 1. Literals and properties
const obj1 = {};
const obj2 = new Object();
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

//  2. Computed properties
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve' , age: 3 };
const person3 = { name: 'dave' , age: 4};
const person4 = new Person('ellie' , 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

//  5. in operator
console.log('name' in ellie);
console.log('age'  in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear()

for (const key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(const value of array) {
    console.log(value);
}

// 7. Fun cloning
const user = {name: 'ellie', age: '20'};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);


const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue' , size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);