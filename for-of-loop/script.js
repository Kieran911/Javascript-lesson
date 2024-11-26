//Loop through arrays
const items = ['Book', 'Table', 'chair', 'kite'];
const users = [
  { name: 'Maddox' },
  { name: 'Birdman' },
  { name: 'Dolphy' },
  { name: 'Prosper' },
];
// Using a for loop
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

//Using a For-of loop
for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

//Loop over string
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

//Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', '30');

for (const [key, value] of map) {
  console.log(key, value);
}
