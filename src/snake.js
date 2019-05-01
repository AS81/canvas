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
        this.direction = [0, 0];
        this.parts = [[rowscount / 2 ^ 0, (rowscount / 2 ^ 0)],
        [rowscount / 2 ^ 0, (rowscount / 2 ^ 0) - 1]];

        console.log("START " + this.parts[0][0] + " + " + this.parts[0][1] + "and"
            + this.parts[1][0] + " + " + this.parts[1][1]);
        //   debugger;  

    }
    toDraw() {
        console.log('toDraw');
        this.parts.forEach(([x, y]) => {
            this.ctx.fillRect(x * this.cellsize,
                y * this.cellsize, this.cellsize, this.cellsize);
        });
    }

    move(rowscount) {
        console.log((rowscount / 2 ^ 0) + " - " + this.direction[0] + " - " + (rowscount / 2 ^ 0) + " - " + this.direction[1]);
        this.partsNew = [[(rowscount / 2 ^ 0) + this.direction[0], (rowscount / 2 ^ 0) + this.direction[1]],
        this.parts[0]];
        console.log(this.partsNew);
        console.log(this.partsNew[0][0] + " + " + this.partsNew[0][1] + "and"
            + this.partsNew[1][0] + " + " + this.partsNew[1][1]);
        this.parts = this.partsNew;
        this.toDraw();
    }
}
