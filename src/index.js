import '@babel/polyfill';
import { createContext } from './helpers/canvas';
import Snake from './snake.js';
import Apple from './apple.js';

const ctx = createContext();
const cellsize = 20;
const rowscount = 15;
const offset = 10;
let lastFrameTime = 0;
let paused = 0;

const snake = new Snake(ctx, rowscount, cellsize);
const apple = new Apple(ctx, rowscount, cellsize);
/**
 * @param {number} elapsedTime
 */
function loop(elapsedTime) {
  if (!paused) {
    // eslint-disable-next-line
    const dt = elapsedTime - lastFrameTime;
    lastFrameTime = elapsedTime;

    ctx.clearRect(0, 0, window.innerWidth, innerHeight);
    ctx.beginPath();
    ctx.save();
    ctx.translate(offset, offset);

    for (let i = 0; i <= rowscount; i++) {
      ctx.moveTo(i * cellsize, 0);
      ctx.lineTo(i * cellsize, cellsize * rowscount);
      ctx.moveTo(0, i * cellsize);
      ctx.lineTo(cellsize * rowscount, i * cellsize);
    }

    ctx.stroke();
    snake.step(dt);
    snake.toDraw(apple);
    apple.Draw();
    ctx.restore();
  }

  window.requestAnimationFrame(loop)

}

window.requestAnimationFrame(loop);

document.addEventListener('keydown', function (e) {
  if ((!paused) || ((paused) && (32 == e.keyCode))) {
    switch (e.keyCode) {
      case 32:
        toPause();
        break;
      case 38:
        if (snake.isMovingHorizontal()) {
          snake.directionNew = [0, -1];
        }
        break;
      case 39:
        if (snake.isMovingVertical()) {
          snake.directionNew = [1, 0];
        }
        break;
      case 40:
        if (snake.isMovingHorizontal()) {
          snake.directionNew = [0, 1];
        }
        break;
      case 37:
        if (snake.isMovingVertical()) {
          snake.directionNew = [-1, 0];
        }
        break;
      default:
        break;
    }
  }
})

function toPause() {
  (!paused) ? (paused = true) : (paused = false);
}


