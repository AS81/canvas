export default class Apple {

  constructor(ctx, rowscount, cellsize) {
    this.ctx = ctx;
    this.rowscount = rowscount;
    this.cellsize = cellsize;
    this.position = [this.random(), this.random()];
    this.time = 0;
    this.color = "green";
  }

  random() {
    return (Math.floor(Math.random() * (this.rowscount-2)+1));
  }

  step(dt) {
    this.time += dt;

    if (this.time < 5000) {
      this.color = "green";
     } else if (this.time < 15000) {
      this.color = "red";
      } else if (this.time > 30000){
      this.time = 0;
    }
  }

  toDraw() {
    this.ctx.save();
    // console.log(this.color);
    // switch (this.color) {
    //   case colorGreen: this.ctx.fillStyle = "green";
    //   break;
    //   case colorRed: this.ctx.fillStyle = "red";
    //   break;
    //   default:
    //   break;
    // }
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.position[0] * this.cellsize,
      this.position[1] * this.cellsize, this.cellsize, this.cellsize);
    this.ctx.restore();
  }
}