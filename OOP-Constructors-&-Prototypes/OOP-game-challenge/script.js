function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (xp) {
  this.points += xp;

  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10;
  }

  console.log(this.describe()); // This is abstraction, here the describe method is hidden inside another function and will be called once the function is called
};

Player.prototype.describe = function () {
  return `Player ${this.name} is level ${this.lvl} with ${this.points} experience points`;
};

const player1 = new Player('John');
const player2 = new Player('Kuda');

player1.gainXp(3);
player2.gainXp(3);
player2.gainXp(5);
player1.gainXp(3);
player2.gainXp(7);
player1.gainXp(9);
player1.gainXp(7);
player2.gainXp(2);

//console.log(player1.describe());
//console.log(player2.describe());  //Abstraction hides this away in another function
