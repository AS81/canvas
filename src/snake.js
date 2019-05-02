
export default class Snake {
  /**
   * 
   * @param {CanvasRenderingContext2D} ctx 
   * @param {*} rowscount 
   * @param {*} cellsize 
   */
  constructor(ctx, rowscount, cellsize) {
    this.ctx = ctx;
    this.rowscount = rowscount;
    this.cellsize = cellsize;
    const center = Math.floor(rowscount / 2);
    this.parts = [[center, center], [center, center + 1]];
    this.direction = [0, -1];
    //this.directionNew = undefined;
    this.time = 0;
  }
  toDraw(apple) {
    console.log(this.canEat(apple));
    this.parts.forEach(([x, y]) => {
      this.ctx.fillRect(x * this.cellsize,
        y * this.cellsize, this.cellsize, this.cellsize);
    });
  }

  step(dt) {
    //console.log(this.parts);
    this.time += dt;
    this.headX = this.parts[0][0] + this.direction[0];
    this.headY = this.parts[0][1] + this.direction[1];

    if (this.time > 250) {
      if (this.directionNew) {
        this.direction = this.directionNew;
        this.directionNew = undefined;
      }

      if (((this.headX >= 0) && (this.headX < this.rowscount)) &&
        ((this.headY >= 0) && (this.headY < this.rowscount))) {

        this.parts.pop();
        this.parts.unshift([this.parts[0][0] + this.direction[0],
        this.parts[0][1] + this.direction[1]]);
        this.time = 0; // С‡С‚Рѕ Р±С‹ РЅРµ РЅР°РєР°РїР»РёРІР°Р»РёСЃСЊ РѕСЃС‚Р°С‚РєРё... " -= 1000 "

      } else {
        //alert('Game over!');
        this.reset()
      }

    }
  }

  isMovingHorizontal() {
    return this.direction[0] != 0;
  }

  isMovingVertical() {
    return this.direction[1] != 0;
  }

  reset() {
    const center = Math.floor(this.rowscount / 2);
    this.parts = [[center, center], [center, center + 1]];
    this.direction = [0, -1];
  }

  canEat(apple) {
    //return true if position Head = pos Apple
    return ((this.parts[0][0] == apple.position[0]) && (this.parts[0][1] == apple.position[1]));
  }



}