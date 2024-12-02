const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Functions
function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  // The reason why this is easier than the audio slide bar is because this slider is an input[type='range']

  // Get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
  video.currentTime = (+progress.value * video.duration) / 100; // the + b4 progress.value converts it to a number bcos it was coming as a string
}

// Event Listeners
video.addEventListener('click', playPause);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', updateProgress);

playBtn.addEventListener('click', playPause);
stopBtn.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});
progress.addEventListener('click', setProgress);
