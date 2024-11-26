let x;
x = 3 + '3'; // This was converted to a string because it was concatenated with a number by the addition operator.
x = 3 + Number('3'); // The number function converts to a number hence the result being 6
x = 4 * '4';
x = 4 + null;
x = Number(null);

console.log(x, typeof x);
