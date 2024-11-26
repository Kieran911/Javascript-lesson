//STANDS FOR JAVASCRIPT OBJECT NOTATION
const post = {
  id: 1,
  title: 'post one',
  body: 'This is the body',
};

//Converting to Json using the .stringify() method
const str = JSON.stringify(post);

console.log(str);
//if u want to use get a property back from a JSON string, u will need to parse it first

//Parse JSON
const obj = JSON.parse(str);

console.log(obj);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);
