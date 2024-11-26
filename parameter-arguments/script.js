//DEFAULT PARAMS
function registerUser(user = 'Bot') {
  //Before ES15 update
  /* if (!user) {
    user = 'Bot'
  }
 */
  return user + ' is registered';
}

console.log(registerUser('Maddox'));

//Rest PARAMS. here the ... rest operator is used.
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

//Objects as PARAMS
function loginUser(user) {
  return `The User ${user.name} with an id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'Maddox',
};

console.log(loginUser(user));

console.log(
  loginUser({
    id: 2,
    name: 'Ahlchemist',
  })
);

//Arrays as PARAMS
function randomNum(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

randomNum([1, 2, 3, 4, 5, 6, 7, 13]);

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const numbers = arr[randomIndex];
  console.log(numbers);
}

getRandom([32, 42, 2, 1, 4, 6]);
