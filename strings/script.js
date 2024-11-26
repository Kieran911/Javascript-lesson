let x;

const name = 'Maddox';
const age = '37';
x = 'Hello my name is' + ' ' + name + ' and I am ' + age;

//Template Literals  uses `` and ${}
x = `Hello, my name is ${name} and I am ${age} years old`;

//String properties and Methods
const s = 'Hello World';

x = s.length;
//When u use a property or a method such as this one it literally means const s = new String('Hello World')

//acess value by key
x = s[1]; //E is returned cos its the second letter

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('H');

x = s.substring(0, 4); //.substring(2, 5);

x = s.substring(5);

x = s.slice(-11, -6);
x = s.trim(-11, -6); //It trims the white space between strings

x = s.replace('World', 'John'); //It replaces the choice word with the second input after the comma sign

x = s.includes('Hello');
x = s.includes('Helli');

x = s.valueOf();

x = s.split(''); //Splits strings into sub strings
console.log(x);
