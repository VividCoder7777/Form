import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ],
	animations: [
		trigger('divState', [
			state(
				'normal',
				style({
					backgroundColor: 'red',
					transform: 'translateX(0)',
					animationName: ''
				})
			),
			state(
				'highlighted',
				style({
					backgroundColor: 'blue',
					height: '300px',
					width: '300px',
					transform: 'translateX(100px)'
				})
			),
			transition('normal <=> highlighted', animate(300))
		])
	]
})
export class HomeComponent implements OnInit {
	@ViewChild('aus') aus: ElementRef;
	state = 'normal';

	constructor(private renderer: Renderer2) {}

	ngOnInit() {
		console.log(this.aus);
		this.renderer.addClass(this.aus.nativeElement, 'orange');
	}

	changeState() {
		if (this.state === 'normal') {
			this.state = 'highlighted';
		} else {
			this.state = 'normal';
		}
	}
}
