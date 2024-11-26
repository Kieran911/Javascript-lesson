if (true) {
  console.log('This is true');
}
if (false) {
  console.log('This is NOT  true');
}

const x = 10;
const y = 4;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
}
if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not equal to ${y}`);
}

if (x <= y) {
  console.log(`${x} is equal to ${y}`);
} //THIS WON'T LOG ON THE CONSOLE BECOS IT'S FALSE

//SHORT-HANDS IF
if (x > y)
  console.log(`${x} is greater than ${y}`), //Here we remove the curly braces
    console.log('this true');
else console.log('This is false');
