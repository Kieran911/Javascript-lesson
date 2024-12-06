// WHEN YOU RE USING THE CLASS METHOD, YOU DONT USE THE 'FUNCTION' KEYWORD TO INSTANTIATE A FUNCTION INSIDE IT
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log('Rectange Area: ' + this.area());
  }
}

const rect1 = new Rectangle('Rectangle 1', 10, 15);

console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect1.isSquare());
console.log(rect1);
rect1.logArea();
