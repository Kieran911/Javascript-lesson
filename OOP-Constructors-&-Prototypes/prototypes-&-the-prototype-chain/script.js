function Rectangle(name, width, height) {
  (this.name = name), (this.width = width), (this.height = height);
  this.area = () => {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 30);
console.log(Object.getPrototypeOf(rect1));
