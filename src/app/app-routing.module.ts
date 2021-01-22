import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './component/map/map.component';
import {MainComponent} from './component/main/main.component';

const routes: Routes = [{path: 'map/:id', component: MapComponent},
  {path: '', component: MainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
