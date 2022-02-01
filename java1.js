'use strict';

console.log("Ashi");
console.info("Patel");
console.warn("London");
console.error("Capricorn");

text = "Experimenting with CSS properties"
console.log('%C' + text, 'font-family:fantasy', 'color:orange','background-color:black', 'font-style:bold', 'padding:10px' )

console.log("Hello World!");

let text = `this is a message`;

console.log(text);

console.info(text);

console.warn(text);

console.error(text);

console.log(`%c` + text, `color:black; background-color:white; font-size: 20px; padding: 10px;`);

console.log(`%c` + text + ` ` + `%c` + text, `color: red;`, `color:blue;`);

let a = 1;
const b = 2;

var c = 3;

// cameelCase

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

// STRINGS

let string1 = `34 * 872 = `;
let result = 34*872;
console.log(string1 + result);

let string2 = `34 * 872 = ${34*872}`;

console.log(string2);