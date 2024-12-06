// Whenever you extend a class, u need to call super() in order to call the constructor of the of the parent class
// Keyword = extends and super()

class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log('Shape name: ' + this.name);
  }
}

// Sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  logName() {
    console.log('Circle name: ' + this.name);
  }
}

const rect1 = new Rectangle('Yellow', 10, 29);
console.log(rect1);
rect1.logName();

const circle = new Circle('Circle 1', 40);
console.log(circle);
circle.logName();

console.log(rect1 instanceof Rectangle);
console.log(rect1 instanceof Shape);
