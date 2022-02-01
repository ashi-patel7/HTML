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