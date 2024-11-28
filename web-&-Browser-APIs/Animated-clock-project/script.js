function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Set-Up canvas
  ctx.save(); // save the default phase
  ctx.clearRect();

  ctx.restore(); // restore the default phase
}
