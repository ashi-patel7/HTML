
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

//console.log(MyArray.length); 
//console.log(MyArray.push('today', 'is', 'wednesday')); //adding elements
//console.log(MyArray.length);
MyArray.shift(); //removing first element

for(let word of MyArray){ //for loop to print contents of array
    console.log(word);
}

//FUNCTIONS

function subtract(num1, num2){
    return num1-num2;
}

//console.log(subtract(45,19));

//FUNCTION EXPRESSIONS

let welcome = function(name,age,gender) {
    return console.log(`My name is ${name}, I am ${age} years old and gender of ${gender}`);
}

//welcome('felix cited',20,'male');
//welcome('ayshwaria', 23, 'female');

//ARROW FUNCTION

powerUp = (n1, n2) => console.log(Math.pow(n1,n2));
//powerUp(3,3);

//let powerUp = (n1, n2) => (Math.pow(n1,n2)); 
//console.log(powerUp(2,3));

//SCOPE

function a(){
    let b = 'My function'; 
    if (b=='My function'){
        let c='Good function'; //local variable c
    }
    console.log(b); //returns my function
    //console.log(c); //reference error - c is not defined
}
a();

//function doSomething() {
   // console.log(a); //uncaught references error, cannot access a before initialisation = a is not declared
  //  console.log(foo());
  //  let a = 1;
 //   function foo() {
 ///     return 2;
  //  }
 // }
  //doSomething();