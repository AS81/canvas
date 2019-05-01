import '@babel/polyfill';
import { createContext } from './helpers/canvas';
import Snake from './snake.js';
import Apple from './apple.js';

const ctx = createContext();
const cellsize = 20;
const rowscount = 15;
const offset = 10;
const arrowKeys = [37, 38, 39, 40];

const wall = (rowscount / 2 ^ 0);
let firstDraw = 1;
const snake = new Snake(ctx, rowscount, cellsize);
const apple = new Apple(ctx, rowscount, cellsize);
let applePart;
/**
 * @param {number} elapsedTime
 */
function loop() {
  // eslint-disable-next-line
  ctx.clearRect(0, 0, innerWidth, innerHeight);
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
  snake.toDraw();
  apple.toDraw();
  ctx.restore();

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop);

let wrongKeyCode = 38; //Snake watch down
//console.log("s1 " + snake.direction[0] + snake.direction[1]);
document.onkeydown = function (e) {
  firstDraw = 0;
  //console.log(`You ${snake.direction[0]}  ${snake.direction[1]}`);

  // Snake can't turn off 180 degree
  if ((arrowKeys.indexOf(e.keyCode) != -1) && ((e.keyCode) != wrongKeyCode)) {
    switch (e.keyCode) {
      case 37: //left
        console.log("key 37 " + wrongKeyCode);
        console.log("make37");
        if (snake.direction[0] !== -wall) {
          snake.direction[0] = snake.direction[0] - 1;
          wrongKeyCode = 39;
        } else {
          snake.direction[0] = wall;
        }
        break;
      case 38: //up
        if (snake.direction[1] !== -wall) {
          snake.direction[1] = snake.direction[1] - 1;
          wrongKeyCode = 40;
        } else {
          snake.direction[1] = wall;
        }
        break;
      case 39: //right
        console.log("key 39 " + wrongKeyCode);
        console.log("make39");
        if (snake.direction[0] !== wall) {
          snake.direction[0] = snake.direction[0] + 1;
          wrongKeyCode = 37;
        } else {
          snake.direction[0] = -wall;
        }
        break;
      case 40: //down
        if (snake.direction[1] !== wall) {
          snake.direction[1] = snake.direction[1] + 1;
          wrongKeyCode = 38;
        } else {
          snake.direction[1] = -wall;
        }
        break;
    }
    if (!firstDraw) {
      snake.move(rowscount,apple.part);
    } else snake.toDraw();
  }
};
