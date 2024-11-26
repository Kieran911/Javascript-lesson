// FALSY VALUES

// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// TRUTHY VALUES

// - Everything else thats not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

// Truthy and falsy caveats
const children = 0;

/* if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
} */
//the above statement is faulty because wen children is zero, it returns 'please enter the number of children' even if the person dosent hv children

if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

//or use !isNaN() is (!isNaN(children))

//checking for empty arrays
const posts = [];
//const posts = ['Post one', 'Post two'];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// use the .length property(posts.length > 0) to check for an empty array b4 evaluating

//Checkng for empty objects

const user = {};

/* const user = {
  name: 'Brad',
}; */

if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('No user');
}

//use the Object.keys() to get an array of the object then check for the length. ie Object.keys(user).length

//Loose Equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
