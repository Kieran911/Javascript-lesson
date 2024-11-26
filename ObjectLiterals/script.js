let x;

const person = {
  name: 'Maddox',
  age: '25',
  country: 'United States',
  hobbies: ['games', 'movies', 'building'],
  address: {
    street: 'Dollar Street',
    number: 23,
    city: 'Infinity',
    privateHobbies: ['being rich', 'imagination'],
  },
};

person.name = 'Madoc';
person.hasGirlfriend = false;
person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

person.greet();
//x = person.address.street;
//x = person.address.privateHobbies[1];
x = person.hobbies[2];

delete person.address.privateHobbies[1];

x = person['age'];
x = person;

const person2 = {
  'first name': 'Maddox',
  'last name': 'Yen',
};

x = person2['first name'];

console.log(x);
