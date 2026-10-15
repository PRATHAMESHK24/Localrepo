console.log("welcome")
var a=5;//global variable decralation
var b=5;
var c="pratham"
console.log(a+b+8)
console.log(typeof a,typeof b ,typeof c)
let x= "yash";//block variable decralation.
const z=true;//constant varibale value not be modify
let q=undefined;
let r=null;
console.log(a,b,c,x,z,q,r)
console.log(typeof a,typeof b,typeof c,typeof x,typeof z,typeof q,typeof r)

let o={ 
       name: "yash",//double quate not use because no space is present.
       "job role":"devloper"//double quate is use because space is present or use.
}
console.log(o)
o.salary=50000;//alter dictionary.
console.log(o)