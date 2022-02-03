`use strict`
import * as DOM from './dom.js';

//add event listener and create element
DOM.butadd.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value); //onclick - fires when user left clicks
DOM.butsubtract.onclick = () => sub(DOM.inputOne.value, DOM.inputTwo.value);
DOM.butdivide.onclick = () => div(DOM.inputOne.value, DOM.inputTwo.value);
DOM.butmultiply.onclick = () => mult(DOM.inputOne.value, DOM.inputTwo.value);
DOM,DOM.butclear.onclick = () => clear();

//Adds to list
function disp(num1, num2, calculation, result) {
    let child = document.createElement(`li`); //the element we are adding
    child.classList.add(`list-group-item`) //adding all arguments passed as a list
    child.innerHTML = `${num1} ${calculation} ${num2} = ${result}` //display the full calc
    DOM.output.appendChild(child); //DOM.output is what we want to append to
}

//Add
function add (num1, num2) {
    let result = Number(num1) + Number(num2); //specify as number otherwise it will just print num1num2
    disp(num1, num2, "+", result);
}

//Subtract
function sub (num1, num2) {
    let result = Number(num1) - Number(num2);
    disp(num1, num2, "- ", result);
}

//Multiply
function mult (num1, num2) {
    let result = Number(num1) * Number(num2);
    disp(num1, num2, "x", result);
}

//Divide
function div (num1, num2) {
    let result = Number(num1) / Number(num2);
    disp(num1, num2, "÷", result);
}

//Clear
function clear(){
    DOM.inputOne.value=""
    DOM.inputTwo.value=""
    document.getElementById(`list_output`).innerHTML = "";
}