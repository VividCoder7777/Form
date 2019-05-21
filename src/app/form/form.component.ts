import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
	@ViewChild('margin') margin: ElementRef;
	@ViewChild('change') change: ElementRef;
	constructor() {}

	ngOnInit() {}

	onHandleClick(element) {
		console.log(element);
		console.log(this.change);
		this.margin.nativeElement.innerText = this.change.nativeElement.innerText;
	}
}
