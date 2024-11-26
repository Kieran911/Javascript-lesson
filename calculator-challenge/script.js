//My answer I made a mistake by not using the double equal to sign ie '==' but i have corrected it.
const calculatorOg = (num1, num2, operator) => {
  if (operator == '+') {
    console.log(num1 + num2);
  } else if (operator == '-') {
    console.log(num1 - num2);
  } else if (operator == '*') {
    console.log(num1 * num2);
  } else if (operator == '/') {
    console.log(num1 / num2);
  } else {
    console.log('Error!!!');
  }
};
calculatorOg(40, 50, '-');

//Teacher's answer
const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid Operator';
  }
  console.log(result);
};

calculator(40, 5, '*');
