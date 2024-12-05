function Rectangle(name, width, height) {
  (this.name = name), (this.width = width), (this.height = height);
}

// Its more efficient to put the function for area directly to the prototype
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle('Rect', 5, 20);
const rect2 = new Rectangle('Rect', 50, 80);

console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
rect.changeName('Test');
console.log(rect.name);

console.log(rect2.area());
console.log(rect2.perimeter());
console.log(rect2.isSquare());
rect2.changeName('Test2');
console.log(rect2.name);
