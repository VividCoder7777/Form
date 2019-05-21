import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-canvas',
	templateUrl: './canvas.component.html',
	styleUrls: [ './canvas.component.scss' ]
})
export class CanvasComponent implements OnInit {
	@ViewChild('myCanvas') canvas: ElementRef;
	ctx;
	i = 0;
	x: number;
	y: number;
	dy: number;
	dx: number;
	ballRadius = 10;

	// for the paddle
	paddleHeight: number;
	paddleWidth: number;
	paddleX: number;

	constructor() {}

	ngOnInit() {
		console.log(this.canvas);

		this.x = this.canvas.nativeElement.width / 2;
		this.y = this.canvas.nativeElement.height - 30;

		this.dy = -2;
		this.dx = 2;

		// define paddle
		this.paddleHeight = 10;
		this.paddleWidth = 75;
		this.paddleX = (this.canvas.nativeElement.width - this.paddleWidth) / 2;

		this.ctx = this.canvas.nativeElement.getContext('2d');
		this.draw.bind(this);
		setInterval(() => {
			this.draw();
		}, 10);
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

		this.drawBall();
		this.ballDelta();
	}

	ballDelta() {
		this.y = this.y + this.dy;
		this.x = this.x + this.dx;

		// do collusion detection for y
		if (this.y + this.dy < this.ballRadius || this.y + this.dy > this.canvasElement.height - this.ballRadius) {
			this.dy = -this.dy;
		}

		if (this.x + this.dx > this.canvasElement.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
			this.dx = -this.dx;
		}
	}

	drawBall() {
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2, false);
		this.ctx.fillStyle = 'green';
		this.ctx.fill();
		this.ctx.closePath();
	}

	get canvasElement() {
		return this.canvas.nativeElement;
	}
}
