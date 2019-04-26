import '@babel/polyfill';
import { createContext } from './helpers/canvas';

const ctx = createContext();


let lastFrameTime = 0;
/**
 * @param {number} elapsedTime
 */
function loop(elapsedTime) {
  // eslint-disable-next-line
  const dt = elapsedTime - lastFrameTime;
  lastFrameTime = elapsedTime;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 100);
  ctx.closePath();

  ctx.stroke();

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop);
