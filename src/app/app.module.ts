import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { InViewportModule } from 'ng-in-viewport';
import { AnimateChildrenComponent } from './animate-children/animate-children.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CanvasComponent } from './canvas/canvas.component';
import { PaddleComponent } from './paddle/paddle.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HomeComponent,
		FormComponent,
		GameComponent,
		AnimateChildrenComponent,
		GalleryComponent,
		CanvasComponent,
		PaddleComponent,
		StorefrontComponent,
		CarouselComponent
	],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, InViewportModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
