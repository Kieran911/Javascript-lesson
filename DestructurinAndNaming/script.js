let x;

const age = 30;
const firstName = 'John';
const lastName = 'Doe';

/* const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
}; */
const person = {
  firstName,
  lastName,
  age,
};

//Both the first and second objects are the same. you can only do this whem the properties and values are the same.
x = person.firstName;

console.log(x);

//DESTRUCTING
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

//const id = todo.id; it can also be written like as shown below
//const { id } = todo;
const {
  id,
  title,
  user: { name },
} = todo;

//console.log(id, title);
console.log(name);

//You can also reassign properties to new variables
const { id: todoId } = todo;

//When you are using the curly braces, you are destructuring but wen u re not, u re renaming.

console.log(todoId);

//You can destruture arrays.  here u use block brackets ie [] instead of curly braces. objects use curly braces while arrays use brackets.
const numbers = [23, 67, 33, 48];

const [first, second, ...rest] = numbers; //the ... operator in destructuring also contains ... sign just like the spread operator but it does different things.
//const [first, second, ...nums] = numbers; it will still give me the same thing as the ...rest
//console.log(first, second, nums);
console.log(first, second, rest);
