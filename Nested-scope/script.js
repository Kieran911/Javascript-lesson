function first() {
  const x = 100;
  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();
}

first();

//You can access the variable in the parent scope from the child but not the other way round.

//NB: A var declaration made inside a function is different from a var declaration made inside a loop or an if statement

if (true) {
  const x = 100;
  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }
}

//You can access the variable in the parent scope from the child but not the other way round.
