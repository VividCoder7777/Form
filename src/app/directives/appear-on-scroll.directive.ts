import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '../../../node_modules/@angular/compiler/testing';

@Directive({
	selector: '[appAppearOnScroll]'
})
export class AppearOnScrollDirective implements OnInit {
	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		// hide element
		//this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'hidden');
	}

	@HostListener('scroll')
	mouseover(eventData: Event) {
		console.log('ACTIVATE');
		this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'visible');
	}

	@HostListener('mouseleave')
	mouseleave(eventData: Event) {
		console.log('DEACTIVATE');
		this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'hidden');
	}
}
