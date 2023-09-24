const name="isha"   //string can be declare as const name= new String("isha")
const number=50

//console.log("name" + number + value); //this is an outdated version of concatenation of strings

console.log(`my name is ${name} and my number is ${number}`); /*this is an advance version and it is called
string interpolation */

const myName= new String("isha")
console.log(myName[0]);
console.log(myName.length);
console.log(myName.__proto__);

console.log(myName.charAt(2));
console.log(myName.indexOf('t'));

const newString=myName.substring(0,3)
console.log(newString);

const newString1= myName.slice(-8,3)
console.log(newString1);

const string3="  goel   "
console.log(string3.trim())

const url="https:isha@38goelgmail.com"
console.log(url.replace('@38','-'));


console.log(url.includes('isha'));


