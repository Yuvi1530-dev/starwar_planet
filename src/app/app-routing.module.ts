import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetViewComponent } from './planet-view/planet-view.component';
const routes: Routes = [
  {
  path: '',
  component: PlanetViewComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
