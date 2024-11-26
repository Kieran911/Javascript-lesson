const age = 13;

//Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

//Using the ternary Operator (Here u can think of the operator (?) as an if and the (:) as an else)

age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

//Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote1 = age >= 18 ? 'You can vote!' : 'You can not vote!';

console.log(canVote);
console.log(canVote1);

//We can also have multiple statements

//const auth = true;
//let redirect;

/*if (auth) {
  alert('Welcome to your dashboard');
  redirect = '/dashboard';
} else {
  alert('Access Denied');
  redirect = 'Please Log in';
} */

//We can cut this down using the ternary operator
const auth = null;
const redirect = auth
  ? (alert('Welcome to your dashboard'), '/dashboard')
  : (alert('Access denied'), 'Log in');

console.log(redirect);

// We can use the && operator if we dont need an else
auth ? console.log('Welcome to the dashboard') : null;

//Using the &&
auth && console.log('Welcome to the dashboard');
