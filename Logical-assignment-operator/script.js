// ||= assigns the right side value only if the left is a falsy value
// ! means 'not'
let a = false;

if (!a) {
  a = 10;
}

//Shorthand using  ||
a = a || 10;

//OR THIS
a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value
let b = 20;

if (b) {
  b = 20;
}

//Using &&
b = b && 20;

b &&= 20;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined.
let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);
