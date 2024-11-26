let x;
const arr = [34, 55, 95, 20, 15];

arr.push(100); //adds 100 to the end
arr.pop(); //removes the last value
arr.unshift(99); //adds 99 to the begining(The 0 index)
arr.shift(); //removes the first value (The 0 index)
//arr.reverse(); //Reverses the array the other way round

//
x = arr.includes(200); //retrns false
x = arr.indexOf(340); //The position inside the array

x = arr.slice(1); // removes 55 temporarily NB: it doesn't change the original array unlike splice
x = arr.slice(1, 4);
//x = arr.splice(1, 4); //4 here means the number of values to delete starting from the initial index,in this case its 55
//x = arr.splice(3, 1); //returns one value
x = arr.splice(1, 4).reverse().toString().charAt(2);
console.log(x);
