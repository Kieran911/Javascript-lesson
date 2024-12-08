// Keep in mind that if a function is within a class, you need to use 'this' keyword wen refering to it
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName; // The underscore is used to signify that its a private property and you shouldn't access it
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  get fullName() {
    return `${this.firstName} ${this._lastName}`;
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('john');
console.log(person1.firstName);

person1.firstName = 'joe';
person1.lastName = 'smith';
console.log(person1);
console.log(person1.fullName);
