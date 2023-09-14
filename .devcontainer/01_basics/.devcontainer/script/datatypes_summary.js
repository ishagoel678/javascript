/* 
Primitive-- 7 types---string,number,boolean,null,undefined,symbol,BigInt
*/

const id=100 //number
const schoolId=100.2 //number
const isLoggedIn=false
const temp=null
let userEmail=undefined
const accountId=symbol('123')
const officeId=symbol('123')

const bigNumber=1234465554545454545455555555555n //BigInt


/*
 Non-primitive(reference)--- array,object,functions
 */

 const array=["isha", "goel"]
 let intro=
 {
     name: "isha",
     age: "22" ,                  //objects always declare within acurly brackets
 }

 const myFunc=function(){
 console.log("hello world");
 }


 //************************************************************************ 
  //two type of memories are there in javascript--stack and heap
  //stack(primitive) and heap(non-primitive)