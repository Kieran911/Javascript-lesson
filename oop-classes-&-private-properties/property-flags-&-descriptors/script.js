// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  hieght: 10,
};

Object.defineProperty(rectObj, 'name', {
  writable: false,
  configurable: false,
  enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

rectObj.name = 'New name';
delete rectObj.name;

console.log(rectObj);

for (let [key, value] of Object.entries(rectObj)) {
  console.log(`${key}: ${value}`); // Name isn't logged cos of the inumerable beign set to false
}

console.log(Object.getOwnPropertyDescriptors(rectObj));
