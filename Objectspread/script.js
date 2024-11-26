const todo = {};

//const todo1 = new Object; //It is the same thing as using the object literal ie {}.
//todo1.name = 'Dog';

//x = todo1;

todo.id = 1;
todo.name = 'Buy milk';
todo.completed = 'true';
x = todo;
x = todo.name;

const person = {
  address: {
    cords: {
      lat: 42.9234,
      lng: -71.3264,
    },
  },
};

x = person.address.cords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name;

x = Object.keys(todo); //It turns an object into an array
x = Object.keys(todo).length; // Since you can't use the .length property on objects, you will need to turn it into an array using the Object.keys() method.

x = Object.values(todo); // To get the values only from an object

x = Object.entries(todo); // to get an array that has the key value pairs from an object

x = todo.hasOwnProperty('name');
console.log(x);
