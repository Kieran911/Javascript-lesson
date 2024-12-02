const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speedUp');
const sppedDown = document.getElementById('sppedDown');

const rollAnimations = [
  {
    transform: 'rotate(0) transform3D(-50%, -50%, 0',
    color: 'white',
  },
  {
    color: 'blue',
    offset: 0.3,
  },
  {
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0',
    color: 'white',
  },
];

const rollOptions = {
  duration: 3000,
  iterations: Infinity,
};

const roll = ball.animate(rollAnimations, rollOptions);

// Event Listeners
play.addEventListener('click', () => roll.play());
pause.addEventListener('click', () => roll.pause());
reverse.addEventListener('click', () => roll.reverse());
