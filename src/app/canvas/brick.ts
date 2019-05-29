export default class Brick{
    
    ctx: CanvasRenderingContext2D;
    
    brickRowCount = 3;
    brickColumnCount = 5;
    brickWidth = 75;
    brickHeight = 20;
    brickPadding = 10;
    brickOffsetTop = 30;
    brickOffsetLeft = 30;
    bricks = [];


    constructor(ctx: CanvasRenderingContext2D){

        this.ctx = ctx;

        for(let c = 0; c < this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for(let r = 0; r < this.brickRowCount; r++) {
                this.bricks[c][r] = { x: 0, y: 0 };
            }
        }
    }

    drawBricks() {
        for(let c = 0; c < this.brickColumnCount; c++) {
            for(let r = 0; r< this.brickRowCount; r++) {
                let brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
                let brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
                this.bricks[c][r].x = brickX;
                this.bricks[c][r].y = brickY;
                this.ctx.beginPath();
                this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
                this.ctx.fillStyle = "#0095DD";
                this.ctx.fill();
                this.ctx.closePath();
            }
        }
    }
};