// Sealing - Prevents properties from being added or removed. Can still be changed
// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);

rectObj.color = 'red';
delete rectObj.name;
rectObj.name = 'Rectangle 2';

console.log(rectObj);

const circleObj = {
  name: 'Circle 1',
  radius: 30,
};

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj);

circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New name';

console.log(descriptors);

console.log('rectObj is sealed?', Object.isSealed(rectObj));
console.log('rectObj is frozen?', Object.isFrozen(rectObj));
console.log('circleObj is sealed?', Object.isSealed(circleObj));
console.log('circleObj is frozen?', Object.isFrozen(circleObj));

// If you freeze an object, it is also sealed
