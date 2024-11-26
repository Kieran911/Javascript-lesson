//STEP 1
let x;
const library = [
  {
    title: 'Learning Javasript',
    author: 'Maddox',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Learning Html',
    author: 'Maddox',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Learning CSS',
    author: 'Maddox',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

x = library;
// console.log(x);

//STEP 2
library[0].status.reading = true;
library[1].status.reading = true;
library[2].status.reading = true;
console.log(x);

// STEP 3 DESTRUCTURE THE TITLE FROM THE FIRST BOOK AND RENAME THE VARIABLE TO FIRSTBOOK. HERE CURLY BRACES ARE USED.
const { title: firstBook } = library[0];

console.log(firstBook);

//STEPS 4 TURN IT TO A JSON STRING
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
