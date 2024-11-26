let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['blueberry', 'raspberry', 'blackberry'];

//fruits.push(berries);
//x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][2];

x = fruits.concat(berries);

//Spread Operator (...)
x = [...fruits, ...berries];

//Flatten Arrays
const arr = [1, 2, [3, 4], 4, 6, [5, 2, 8]];
x = arr.flat();

//Static Methods on Array Object
x = Array.isArray('Hello');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
