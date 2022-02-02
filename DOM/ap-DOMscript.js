//Query selector() -- let ele = document.querySelector(selector);
let firstDiv = document.querySelector('div'); //element=firstDiv selector=CSS selector, div
firstDiv.style.color = 'red';

//Query selectorAll() -- let eles = document.querySelectorAll(selector);
let paragraphs = document.querySelectorAll('p'); //all paragraphs coloured green
for(let p of paragraphs){ 
    p.style.color = 'green';
}

//createElement() - document.createElement(tagName); using name of HTML tag to be created (p,div)
let pEle = document.createElement('p'); //creating a new paragraph element 

//appendChild() - ele.appendChild(childEle); ele:element we wish to add child to, childele:element added as the last child of ele
let div = document.querySelector('div'); //query selector
let strong = document.createElement('strong'); //creating an element
strong.textContent = "Hello friends"; //the text we wish to add
div.appendChild(strong); //inserting <strong> (bold) HTML element as the child of a div

//removechild()
// div.removeChild(strong);

//replacechild()
let em = document.createElement('em'); //creating new <em> tag
//let strong = document.querySelector('strong'); //query selector to get child element <strong>
//let div = document.querySelector('div'); //query selector to get parent element <div>
em.textContent = "Replaced!"; 
div.replaceChild(em,strong); //replacing child ele <strong> belonging to parenet <div> with new child <em>

//setAttribute() - adds new attribute to HTML element or updates the value of an attribute that already existss
div.setAttribute('contenteditable',''); //adding the contentEditable attribute which will make its contents editable 

//getAttribute - returns the value of a specified attribute belonging to a certain html document
alert(div.getAttribute('contenteditable')); //alerting the value of contentEditable belonging to <div> using GetAttribute()

//removeAttribute
div.removeAttribute('contenteditable'); //removing the ContentEditable belonging to <div> element