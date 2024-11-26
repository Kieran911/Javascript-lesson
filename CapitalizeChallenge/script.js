//MY SOLUTION
/* const myString = 'wonderful';

const MyNewString = myString.charAt(0);

MyNewString.toUpperCase();

console.log(MyNewString); */

//TEACHERS SOLUTIONS
const myString = 'developer';

let MyNewString;
//Solution 1
MyNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

//Solution 2 here he used the bracket syntax []
MyNewString = myString[0].toUpperCase() + myString.substring(1);

//Solution 3 Using template Literals Thats `${}`
MyNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(MyNewString);
