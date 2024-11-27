const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw Rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100); // x, y, width, height

// Draw circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2); // x, y, radius, start-angle, end-angle
ctx.fill();

// Draw Lines
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = '5';
ctx.moveTo(10, 10); // x, y NB: this wont draw a line
ctx.lineTo(300, 300); // This will draw a line to a specified spot
ctx.stroke(); // This will draw the line

// Draw text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillText('Hello World', 300, 100, 300); // The text, x, y, max-width
ctx.strokeText('Hello World', 300, 500, 300); // The text, x, y, max-width NB: this will create a text like an outline

// Draw Image
const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => {
  ctx.drawImage(image, 250, 250, 100, 100);
});
