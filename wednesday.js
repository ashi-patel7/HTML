let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

let MyArray = Array('hello', 'everyone');

console.log(MyArray.length);

console.log(MyArray.push('today', 'is', 'wednesday'));

console.log(MyArray.length);

MyArray.shift();

for(let word of MyArray){
    console.log(word);
}
