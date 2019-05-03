export default class World{
  constructor(){
      this.bodies = new Set();
      this.g = [0,9.8];
  }

  addBody(body)
  {
      this.bodies.add(body);
  }

  update(dt)
  {
      this.bodies.forEach(elem => {
          elem.velocity[0] += this.g[0];
          elem.velocity[1] += this.g[1];
          elem.position[0] += elem.velocity[0] * dt;
          elem.position[1] += elem.velocity[1] * dt;
      });
  }
}