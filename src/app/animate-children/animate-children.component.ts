import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, style, animate, state, transition, keyframes } from '@angular/animations';

// create the animation to be used on the chlidren
@Component({
	selector: 'app-animate-children',
	templateUrl: './animate-children.component.html',
	styleUrls: [ './animate-children.component.scss' ],
	animations: [
		trigger('fadeIn', [
			state('true', style({ opacity: '1' })),
			state('false', style({ opacity: '0' })),
			transition('* => true', [ animate(1000) ])
		])
	]
})
export class AnimateChildrenComponent implements OnInit {
	isVisible: boolean;

	constructor(private renderer: Renderer2) {}

	ngOnInit() {}

	showElement({ target, visible }) {
		// toggle on the animation

		if (this.isVisible) {
			return;
		}

		this.isVisible = visible;
		console.log(this.isVisible);
	}
}
