export default class Apple {

  constructor(ctx, rowscount, cellsize) {
    this.ctx = ctx;
    this.rowscount = rowscount;
    this.cellsize = cellsize;
    this.position = [this.random(), this.random()];
  }

  random() {
    return (Math.floor(Math.random() * this.rowscount));
  }

  Draw() {
    this.ctx.save();
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.position[0] * this.cellsize,
      this.position[1] * this.cellsize, this.cellsize, this.cellsize);
    this.ctx.restore();
  }
}