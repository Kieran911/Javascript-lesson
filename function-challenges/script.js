/* function getCelsius(value) {
    return value + 'celsius';
}  */

/* const getCelsius = (value) => value - (32 * 5) / 9 + '\xB0C';
console.log(`The temperature is ${getCelsius(32)}`); */

//TEACHERS ANSWER

/* function getCelsius(f) {
  const celsius = ((f - 32) * 5) / 9;
  return celsius + '\xB0C';
} */

//ARROW FUNCTION

const getCelsius = (f) => ((f - 32) * 5) / 9 + '\xB0C';

console.log(getCelsius(45));

//SECOND CHALLENGE | TEACHER SOLVED IT, I FAILED TOTALLY
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}
console.log(minMax([1, 2, 3, 4, 5]));

//CHALLENGE THREE  I solved it by myself DAMN, I'M HOT
(function area(a, b) {
  const multiply = a * b;
  console.log(
    `The area of a rectangle with a length of ${a} and width of ${b} is ${multiply}`
  );
})(3, 4);

//TEACHER'S SOLUTION, HE USED AN ARROW FUNCTION
((length, width) => {
  const area = length * width;
  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
  console.log(output);
})(5, 6);
