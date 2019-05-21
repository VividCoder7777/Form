import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, state, transition, keyframes } from '@angular/animations';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: [ './game.component.scss' ],
	animations: [
		trigger('walk', [
			state('slow', style({})),
			transition('* => slow', [
				animate(
					5000,
					keyframes([
						style({
							transform: 'translateX(1000px)',
							offset: 0.5
						}),
						style({
							transform: 'translateX(0)',
							offset: 1
						})
					])
				)
			]),
			state('normal', style({})),
			transition('* => normal', [
				animate(
					3000,
					keyframes([
						style({
							transform: 'translateX(1000px)',
							offset: 0.5
						}),
						style({
							transform: 'translateX(0)',
							offset: 1
						})
					])
				)
			]),
			state('fast', style({})),
			transition('* => fast', [
				animate(
					1000,
					keyframes([
						style({
							transform: 'translateX(1000px)',
							offset: 0.5
						}),
						style({
							transform: 'translateX(0)',
							offset: 1
						})
					])
				)
			])
		])
	]
})
export class GameComponent implements OnInit {
	speed: string;
	inProgress = false;

	constructor() {}

	ngOnInit() {}

	walk(speed) {
		console.log('change speed to ', speed);
		this.speed = speed;
	}

	beginWalk() {
		this.inProgress = true;
	}

	restartState(event) {
		console.log('finished walk!');
		this.speed = '';
		this.inProgress = false;
	}

	showElement(event) {
		// make element visible on scroll;
		console.log('hello');
		console.log(event);
	}
}
