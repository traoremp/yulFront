import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './component/map/map.component';
import {AvatarComponent} from './component/avatar/avatar.component';

const routes: Routes = [{path: 'map/:id', component: MapComponent},
  {path: '', component: AvatarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
