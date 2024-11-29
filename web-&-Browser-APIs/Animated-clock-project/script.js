const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const lineColor = document.getElementById('line-color');
const largeHandColor = document.getElementById('large-hand-color');
const secondHandColor = document.getElementById('second-hand-color');
const saveBtn = document.getElementById('save-btn');

// Reassigning values
function setColorToStorage() {
  const myObject = {
    faceColorValue: faceColor.value,
    borderColorValue: borderColor.value,
    lineColorValue: lineColor.value,
    largeHandColorValue: largeHandColor.value,
    secondHandColorValue: secondHandColor.value,
  };

  localStorage.setItem('colorValue', JSON.stringify(myObject));
}

// Load colors from local storage
function loadFromStorage() {
  const colorValue = JSON.parse(localStorage.getItem('colorValue'));

  faceColor.value = colorValue.faceColorValue;
  borderColor.value = colorValue.borderColorValue;
  lineColor.value = colorValue.lineColorValue;
  largeHandColor.value = colorValue.largeHandColorValue;
  secondHandColor.value = colorValue.secondHandColorValue;
}

function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Set-Up canvas
  ctx.save(); // save the default phase
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); // This puts the 0, 0 points of x and y in the middle
  ctx.rotate(-Math.PI / 2); // Rotate clock -90deg

  // set default styles
  ctx.strokeStyle = borderColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw clock face/ border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw hour lines
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(110, 0);
    ctx.lineTo(130, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Draw minute lines
  ctx.save();
  ctx.lineWidth = 4;
  ctx.strokeStyle = lineColor.value;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(125, 0);
      ctx.lineTo(130, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  // Get Current time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // Draw hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = largeHandColor.value;
  ctx.lineWidth = 13;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(85, 0);
  ctx.stroke();
  ctx.restore();

  // Draw minute hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = largeHandColor.value;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-32, 0);
  ctx.lineTo(115, 0);
  ctx.stroke();
  ctx.restore();

  // Draw seconds hand
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = secondHandColor.value;
  ctx.fillStyle = secondHandColor.value;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-34, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore(); // restore the default phase
  requestAnimationFrame(clock);
}
clock();

requestAnimationFrame(clock);

// Reset to default colors
function resetColors() {
  localStorage.clear();
  faceColor.value = '#f4f4f4';
  borderColor.value = '#800000';
  lineColor.value = '#000000';
  largeHandColor.value = '#800000';
  secondHandColor.value = '#FF7F50';

  setColorToStorage();
}

// Event listeners
[faceColor, borderColor, lineColor, largeHandColor, secondHandColor].forEach(
  (item) => {
    item.addEventListener('input', setColorToStorage);
  }
);
saveBtn.addEventListener('click', () => {
  const imgURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = imgURL;
  link.click();
});
document.querySelector('#reset-btn').addEventListener('click', resetColors);
document.addEventListener('DOMContentLoaded', loadFromStorage);
