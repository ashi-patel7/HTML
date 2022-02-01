'use strict';

console.log("Ashi");
console.info("Patel");
console.warn("London");
console.error("Capricorn");

let text_example = "Experimenting with CSS properties";
console.log('%c'+ text_example, 'font-family:fantasy; color:orange; background-color:black; font-style:bold; padding:10px');

console.log("Hello World!");

// Variables - Cameron EXAMPLE

let aBoolean = true;
console.log(aBoolean);

let aNumber = 6;
console.log(aNumber);

let aString = `text`;
console.log(aString);

let aBrokenBigInt = 9999999999999999n;
console.log(aBrokenBigInt);

let aSymbol = Symbol(`description in here`);
console.log(aSymbol);

let aNull = null;
console.log(aNull);

let anUndefined;
console.log(anUndefined);


let myObject = {
  key : `value`,
  anotherKey : 12345
}

console.log(myObject);

// STRINGS - Cameron example

let string1 = `34 * 872 = `;
let result = 34*872;
console.log(string1 + result);

let string2 = `34 * 872 = ${34*872}`;

console.log(string2);

// Variables exercise

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

typeof(a);
typeof(b);
typeof(c);
typeof(d);
typeof(e);