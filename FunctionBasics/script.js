function sayHello() {
  console.log('Hello World');
}
sayHello(); //Calling or invoking a function

function add(num1, num2) /*these are parameters*/ {
  console.log(num1 + num2);
}
add(5, 28); //these are arguments.

function substract(num1, num2) {
  return num1 - num2;

  console.log('Hello'); //after the return statement has been made, nothing below it will get logged or recognized.
}

const result = substract(29, 8);

console.log(result, substract(39, 9));
