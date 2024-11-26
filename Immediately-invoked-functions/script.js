//If u hv a variable declared in two js files, logging it on the console will throw an error so thats why IIFE are important.
//IIFE involves the use of double parenthesis ()()

(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('Shawn'); //ADDING PARAMS TO YUR IIFE

//NAMING UR IIFE
(function hello() {
  console.log('Hello');
})(); //This is not very common. it might cause infinite loops wen done wrong
