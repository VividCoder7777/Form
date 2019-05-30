import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";
import Brick from "./brick";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"]
})
export class CanvasComponent implements OnInit {
  @ViewChild("myCanvas") canvas: ElementRef;
  ctx;
  i = 0;
  x: number;
  y: number;
  dy: number;
  dx: number;
  ballRadius = 10;
  bricks: Brick;
  speedOfBall = 4;

  // for the paddle
  paddleHeight: number;
  paddleWidth: number;
  paddleX: number;

  // storing state of keypresses
  leftPressed = false;
  rightPressed = false;

  // score
  score = 0;

  // the interval tracker
  gameLoop;
  // determines whether to show score screen or not
  gameOver = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.x = this.canvas.nativeElement.width / 2;
    this.y = this.canvas.nativeElement.height - 30;

    this.dy = -this.speedOfBall;
    this.dx = this.speedOfBall;

    // define paddle
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (this.canvas.nativeElement.width - this.paddleWidth) / 2;

    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.draw.bind(this);

    // listeners for movement
    this.document.addEventListener(
      "keyup",
      this.onKeyPressUp.bind(this),
      false
    );
    this.document.addEventListener(
      "keydown",
      this.onKeyPressDown.bind(this),
      false
    );

    // Bricks
    this.bricks = new Brick(this.ctx);

    // call the draw method every 10ms this means 1000/10 = 100 frames
    this.gameLoop = this.startGame();
  }

  startGame() {
    this.x = Math.random() * this.canvasElement.width + 1;
    this.y = Math.random() * 100 + 20;
    this.score = 0;

    return setInterval(() => {
      this.draw();
    }, 10);
  }

  onKeyPressUp(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = false;
    }
  }

  onKeyPressDown(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = true;
    }
  }

  draw() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );

    this.drawBall();
    this.drawPaddle();
    this.drawScore();
    this.bricks.drawBricks();
    // calculate next state, determine collision and make changes if any
    this.ballDelta();
    this.paddleDelta();
  }

  ballDelta() {
    this.y = this.y + this.dy;
    this.x = this.x + this.dx;

    // do collusion detection for y
    if (this.y + this.dy < this.ballRadius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy > this.canvasElement.height - this.ballRadius) {
      if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
        this.dy = -this.dy;
        this.increaseScore();
      } else {
        this.drawEnd();
        this.gameOver = true;
        clearInterval(this.gameLoop); // Needed for Chrome to end game
      }
    }

    if (
      this.x + this.dx > this.canvasElement.width - this.ballRadius ||
      this.x + this.dx < this.ballRadius
    ) {
      this.dx = -this.dx;
    }
  }

  handleRestart() {
    console.log("restarting!");
    this.gameOver = false;
    this.gameLoop = this.startGame();
  }

  increaseScore(amount = 1) {
    this.score += amount;
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawPaddle() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.paddleX,
      this.canvasElement.height - this.paddleHeight,
      this.paddleWidth,
      this.paddleHeight
    );
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  paddleDelta() {
    if (
      this.rightPressed &&
      this.paddleX < this.canvasElement.width - this.paddleWidth
    ) {
      console.log("move right");
      this.paddleX += 7;
    } else if (this.leftPressed && this.paddleX > 0) {
      console.log("move left");
      this.paddleX -= 7;
    }
  }

  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillText(
      `Score: ${this.score}`,
      this.canvasElement.width - 70,
      20
    );
  }

  drawEnd() {
    this.ctx.font = "16px Arial";
    this.ctx.fillText(
      `GAME OVER`,
      this.canvasElement.width * 0.4,
      this.canvasElement.height / 2
    );
  }

  get canvasElement() {
    return this.canvas.nativeElement;
  }
}
