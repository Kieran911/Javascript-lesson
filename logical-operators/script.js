console.log(10 > 20 && 30 > 15 && 40 > 30); //All has to be true for the && operator to log 'true' to the console

console.log(10 > 20 || 30 > 15); // Here if  one of them is true the || ('or') operator will log 'true' to the console

//&& - Will return the first falsy value or the last value example below
let a;
a = 10 && 20; // Will return 20 here
a = 10 && 20 && 30; //Will return 30 here
a = 10 && 0 && 20; // Will return 0 becos its the first falsy value
a = 10 && '' && 0 && 20; // Will return the empty string becos its the first falsy value

console.log(a);

const posts = ['Post One', 'Post Two'];
const post = [];
console.log(posts[0]);
//console.log(post[0]); // This will return undefined and we dont want that. so we make use of the .length() property
post.length > 0 && console.log(post[0]);
posts.length > 0 && console.log(posts[0]);

//  || - will return the first truthy value or the last value
let b;

b = 10 || 20; //Will return 10, becos its the first truthy value
b = 0 || 20; // Will return 20 becos its d last value.
b = 0 || null || '' || undefined; //Will return undefined becos its the last value

console.log(b);

// ?? OPERATOR - Returns the right side operand wen the left is either null or undefined

let c;

c = 10 ?? 30; // Will return 10 becos its left side is neither null nor undefined
c = null ?? 20; //Will return the right side becos the left side is null
c = undefined ?? 30; // Will return the right side becos the left side is undefined
c = 0 ?? 30; // Will return 0 becos its only looking for null or undefined
c = '' ?? 30; // Will return the empty string becos its only looking for null or undefined
