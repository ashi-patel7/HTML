'use strict';

//console.log("Ashi");
//console.info("Patel");
//console.warn("London");
//console.error("Capricorn");

//let text_example = "Experimenting with CSS properties";
//console.log('%c'+ text_example, 'font-family:fantasy; color:orange; background-color:black; font-style:bold; padding:10px');

//console.log("Hello World!");

// Variables - Cameron EXAMPLE

//let aBoolean = true;
//console.log(aBoolean);

//let aNumber = 6;
//console.log(aNumber);

//let aString = `text`;
//console.log(aString);

//let aBrokenBigInt = 9999999999999999n;
//console.log(aBrokenBigInt);

//let aSymbol = Symbol(`description in here`);
//console.log(aSymbol);

//let aNull = null;
//console.log(aNull);

//let anUndefined;
//console.log(anUndefined);


//let myObject = {
  //key : `value`,
  //anotherKey : 12345
//}

//console.log(myObject);

        // STRINGS - Cameron example

//let string1 = `34 * 872 = `;
//let result = 34*872;
//console.log(string1 + result);

//let string2 = `34 * 872 = ${34*872}`;

//console.log(string2);

        // How to find javascript types - will return null, string, number, boolean, object

//let a;
//let b = "12345";
//let c = 12344;
//let d = true;
//let e = {a:"JavaScript"};

//console.log(typeof(a));
//console.log(typeof(b));
//console.log(typeof(c));
//console.log(typeof(d));
//console.log(typeof(e));

        //template literals to change sentence
//let total_money = 4000;
//let money_paid = 2348;
//let total_left_to_pay = total_money - money_paid;

//console.log(`The total left to pay is £${total_money} the remaining left to pay is £${total_left_to_pay}`);


                //ITERATION
//let A = 100;
//while(A<=200) {
 //   A++;
  //  console.log(`A = ${A}`);
//}

//while(A<=200){
  //  if (A%2==0) {
    //    console.log('-');
    //} else {
      //      console.log('*');
        //}
        //A++;
    //}

   // for (let i = 0; i < 10; i++) { //declare the variable i and initiaise to 0, set the condition to exercise the loop until i is not greater than 10
   //     for (let j = 1; j <= 10; j++) { //declare the variable j and initialise to 1, set the condition to exercise the loop until j is not greater/equal to 10
  //        console.log(j); //as the conditions are satisfied, j is printed
 //       }
 //    }  

 //for (let a = 100; a <= 200; a++) { //declare variable a, initialise to 100, set condition to exercise until a is not greater than or equal to 200
   // console.log(`a = ${a}`); //as condition is satified, a=value of a is printed
 // }

 //for (let a = 100; a <= 200; a++) {
   // if (a % 2 == 0) {
    //  console.log("-");
   // } else {
     // console.log("*");
   // }
 // }

 // Write a switch case statement which uses the current day as its expression and matches with the relevant case. Criteria:
//Omit a break statement if it is a weekday, until the last day
// Use a default case to handle an invalid range.

//let currentday = new Date();
//let day = currentday.getDate(); //using the current day as its expression
//console.log(day);

//switch(day) {
   // case 0:
  //  case 1:
//    case 2:
 //   case 3:
   // case 4:
    //    console.log(`It is a weekday`);
  //  break;
   // case 5:
  //  case 6:
     //   console.log(`It is the weekend`);
  //  break;
  //  default:
//        console.log(`Invalid range`);
//}

                //TRUTHEY FALSEY
let strictA = true;
let strictB = 1;

console.log(strictA == strictB); //returns true because only checking values
console.log(strictA === strictB); // returns false because both type and values are checked

console.log(strictA != strictB); //the values themselves are equal thus returning false
console.log(strictA !== strictB); // returns true, checking whether A and B are not equal, returning true as they are not equal because type is considered here

// if age is between 18 and 65 return value in which each case is satified for not 
let age = 33;

if (age >=18 & age<=65) {
    console.log('Age is within range');
} else if (age<18) {
    console.log('Underage');
} else {
    console.log('Beyond range');
}

//ternary-if that checks if age is above 50

let age_check = age>=50 ? console.log("50 or above") : console.log("Below 50");




