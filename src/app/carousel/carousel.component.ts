import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  @ViewChild("carousel") carousel: ElementRef;
  carouselImages: [];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.carouselImages = this.carousel.nativeElement.querySelectorAll(
      ".carousel-image"
    );
    console.log(this.carouselImages);

    for (let picture of this.carouselImages) {
      console.log(picture);
    }
  }
}
