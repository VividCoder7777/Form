import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { GameComponent } from './game/game.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CanvasComponent } from './canvas/canvas.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'form',
		component: FormComponent
	},
	{
		path: 'game',
		component: GameComponent
	},
	{
		path: 'gallery',
		component: GalleryComponent
	},
	{
		path: 'canvas',
		component: CanvasComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
