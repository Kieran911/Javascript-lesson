let x;
//Array Literal
const numbers = [23, 21, 39, 30];
const mixed = [23, 'mango', 34, 21, 'guava', null, true];

//Array Constructor
const fruits = new Array('apple', 'grape', 'guava', 'orange');

x = numbers[1] + numbers[3];

x = `My favorite fruit is ${fruits[2]}`;

//x = mixed.length;
//x = fruits;

mixed[2] = 'orange';

//fruits.length = 3;

//To add a item to the array
fruits[3] = 'blueberry';

fruits[fruits.length] = 'peach';
fruits[fruits.length] = 'orange';

console.log(x);
console.log(mixed);
