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

    //Create a method that can print out the numbers 1-10 10 times each

   // for (let i = 0; i < 10; i++) {
   //     for (let j = 1; j <= 10; j++) {
  //        console.log(j);
 //       }
 //    }  

 //for (let a = 100; a <= 200; a++) {
   // console.log(`a = ${a}`);
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

let currentday = new Date();
let day = currentday.getDate(); //using the current day as its expression
console.log(day);

switch(day) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log(`It is a weekday`);
    break;
    case 5:
    case 6:
        console.log(`It is the weekend`);
    break;
    default:
        console.log(`Invalid range`);
}
