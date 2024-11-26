function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

//ARROW FUNCTIONS SYNTHAX
const addIt = (a, b) => {
  return a + b;
};
console.log(addIt(2, 5));

//WE CAN SHORTEN IT FURTHER LIKE THIS
const subtract = (a, b) => a - b; //This is the synthax, here we remove the return keyword.

console.log(subtract(2, 5));

//ANOTHER WAY TO SHORTEN THINGS UP IF YOUR FUNCTION ONLY TAKES UP A SINGLE PARAMETER
//From this
const double = (a) => a * 2;
console.log(double(29));

//TO THIS Here u can leave off paranthesis with a single param
//const double = a => a * 2;
//console.log(double(5))

//RETURNING AN OBJECT
const createObj = () => ({
  name: 'Madoc',
});

console.log(createObj());

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
  console.log(n);
});
//OR

numbers.forEach((n) => console.log(n)); //Arrow function in a callback
