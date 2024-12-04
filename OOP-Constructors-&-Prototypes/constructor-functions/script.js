function Rectangle(name, width, height) {
  (this.name = name), (this.width = width), (this.height = height);
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 20);
console.log(rect1.name);
console.log(rect1.area());

const rect2 = new Rectangle('Rectangle 2', 30, 40);
console.log(rect2.area());

const rect3 = new Rectangle('Rectangle 3', 5, 20);
console.log(rect3.area());

console.log(rect2.constructor);
console.log(rect3 instanceof Rectangle);
