import '@babel/polyfill';
import { createContext } from './helpers/canvas';
import Body from './body';
import World from './world';

const ctx = createContext();
const earth = new World();
const body1 = new Body(50,10);
const body2 = new Body(500,100);
let lastFrameTime = 0;

earth.addBody(body1);
earth.addBody(body2);

/**
 * @param {number} elapsedTime
 */
function loop(elapsedTime) {
  const dt = elapsedTime - lastFrameTime;
  lastFrameTime = elapsedTime;
  ctx.clearRect(0, 0, window.innerWidth, innerHeight);
  ctx.beginPath();
  ctx.save();
  earth.bodies.forEach(elem => {
    ctx.fillRect(elem.position[0]/6,elem.position[1]/6,25,25);
  });
  earth.update(dt/1000);
  window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop);
