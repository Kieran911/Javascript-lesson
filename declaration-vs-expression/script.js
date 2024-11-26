//Function declaration
function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(200));

//Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));

function addAnySign(value) {
  return '#' + value;
}
addAnySign();

console.log(addAnySign(300));
