const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const moveAmount = 10;
const clearButton = document.querySelector('.clear-button');

//Setup canvas for drawing
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hslValue = 0;
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.strokeStyle = `hsl(${hslValue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//draw function
function draw(e) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  if (!e.key.includes('Arrow')) {
    return;
  }
  e.preventDefault();
  switch (e.key) {
    case 'ArrowUp':
      y -= moveAmount;
      break;
    case 'ArrowDown':
      y += moveAmount;
      break;
    case 'ArrowLeft':
      x -= moveAmount;
      break;
    case 'ArrowRight':
      x += moveAmount;
      break;
  }
  hslValue += 1;
  ctx.strokeStyle = `hsl(${hslValue}, 100%, 50%)`;
  ctx.lineTo(x, y);
  ctx.stroke();
}
//Clear the Canvas
function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
}

window.addEventListener('keydown', draw);
clearButton.addEventListener('click', clearCanvas);
