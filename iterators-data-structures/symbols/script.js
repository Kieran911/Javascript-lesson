const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2);
console.log(typeof sym);
console.log(sym.description);
console.log(sym2.description);

// Symbols are unique
console.log(Symbol('sym') === Symbol('sym'));

const user = {
  [Symbol('id')]: 1,
  name: 'John Doe',
  email: 'john@gmail.com',
};

console.log(user[Symbol('id')]);

// Symbols are NOT enumerable
console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
  console.log(key);
}

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user));
