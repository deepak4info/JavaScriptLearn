const name = "Deepak"
const repoCount = 5

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('free-fire-dot-com')


console.log(gameName[0]);
 console.log(gameName.__proto__);


console.log(gameName.length);

 console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)  // start point or end point 
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // you can add neigative value 
console.log(anotherString);

const newStringOne = "   deepak    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/deepak%20info/JavaScript%20Learn"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));