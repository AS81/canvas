import Apple from "./apple";

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
        this.ctx.fillStyle = 'black';
        this.parts = [[rowscount / 2 ^ 0, (rowscount / 2 ^ 0)],
        [rowscount / 2 ^ 0, (rowscount / 2 ^ 0) - 1]];

        console.log("START " + this.parts[0][0] + " + " + this.parts[0][1] + "and"
            + this.parts[1][0] + " + " + this.parts[1][1]);
        let partsLastElement = [0,0];
        //   debugger;  

    }
    toDraw() {
      //  console.log('toDraw');
        this.parts.forEach(([x, y]) => {
            this.ctx.fillRect(x * this.cellsize,
                y * this.cellsize, this.cellsize, this.cellsize);
        });
    }

    move(rowscount,applePart,partsLastElement) {
        //console.log((rowscount / 2 ^ 0) + " - " + this.direction[0] + " - " + (rowscount / 2 ^ 0) + " - " + this.direction[1]);
        partsLastElement = this.parts[1];

        this.partsNew = [[(rowscount / 2 ^ 0) + this.direction[0],
        (rowscount / 2 ^ 0) + this.direction[1]],
        this.parts[0]];
        
        this.parts = this.partsNew;
        
        // console.log("applePart[0]) "+ applePart[0]  + applePart[1]);
        // console.log("this.parts[0][0]"+this.parts[0][0]+ this.parts[0][1]);
        
        if ((this.parts[0][0] == applePart[0]) && (this.parts[0][1] == applePart[1])) {
            this.parts.push(partsLastElement);
        }
        this.toDraw();
    }

    
}
