let score="33a"

 console.log(typeof score);

let valueInNumber=Number(score) //conversion of datatype

console.log(valueInNumber);

//33=33
//3a=NaN 
//TRUE=1, FALSE=0

//similarly we can covert the data in other datatype also like boolean, string and many more

//*************************************operations**************************************//

console.log(2%3)
console.log(2**3)

let str1="hello"
let str2="world"
str3=str1 + str2
console.log( ""+str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
/* 
if first data is string then other data also treated as string
and if first data is number then firstly they have to do operate by the given operation and become a string
*/
console.log(+true);  //1
console.log(+"");  //0

let gameCounter=100

gameCounter++

console.log(gameCounter);
