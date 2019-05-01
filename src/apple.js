export default class Apple {
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
        this.ctx.fillStyle = 'green';
        this.part = [(Math.random() * (rowscount - 2) ^ 0) + 1,
        (Math.random() * (rowscount - 2) ^ 0) + 1];
         //   debugger; After add test for apple dont located in snake
}
    toDraw() {
        this.ctx.fillRect(this.part[0] * this.cellsize,
            this.part[1] * this.cellsize, this.cellsize, this.cellsize);
    }
}
