for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Use the % to check if the result of a number divived by another is zero. if its zero, then that number is an integer.
// A shorter way to chec for the multiples of 3 & 5 would be to check if the  umber is divisible by 15

// if (i % 15 === 0) {
// console.log('FizzBuzz')}

// WHILE LOOP
// let j = 1;
//
// while (j <= 100) {
//   if (j % 15 === 0) {
//     console.log('FizzBuzz');
//   } else if (j % 3 === 0) {
//     console.log('Fizz');
//   } else if (j % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(j);
//   }
//   j++;
// }
