// Get current Position
function curSuccess(pos) {
  const coords = pos.coords;

  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`accuracy: ${coords.accuracy.toFixed(3)} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if Available
  timeout: 5000, // Time to stop trying for location
  maximumAge: 0, // Do not use cached position
};

// navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// Watch Position
const target = {
  latitude: 41.3874387,
  longitude: -71.394839,
};

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reach your destination!');
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if Available
  timeout: 5000, // Time to stop trying for location
  maximumAge: 0, // Do not use cached position
};

const id = navigator.geolocation.getCurrentPosition(
  watchSuccess,
  watchError,
  watchOptions
);
