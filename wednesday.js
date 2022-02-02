//OBJECTS
let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};
//console.log(darthVader);

//console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
//console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
//console.log(`Darth Vader is a sith? ${darthVader.sith}`);
//console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

//ARRAYS
let MyArray = Array('hello', 'everyone');

console.log(MyArray.length); 
console.log(MyArray.push('today', 'is', 'wednesday')); //adding elements
//console.log(MyArray.length);
MyArray.shift(); //removing first element

for(let word of MyArray){ //for loop to print contents of array
    console.log(word);
}

//FUNCTIONS

function subtract(num1, num2){
    return num1-num2;
}

console.log(subtract(45,19));

//FUNCTION EXPRESSIONS

let welcome = function(name,age,gender) {
    return console.log(`My name is ${name}, I am ${age} years old and gender of ${gender}`);
}

//welcome('felix cited',20,'male');
//welcome('ayshwaria', 23, 'female');

//ARROW FUNCTION

powerUp = (n1, n2) => console.log(Math.pow(n1,n2));

powerUp(2,3);
powerUp(3,3);