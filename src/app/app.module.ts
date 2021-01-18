import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './component/map/map.component';

import {RxStompService} from '@stomp/ng2-stompjs';
import {ProgressWebsocketService} from './service/progress.websocket.service';
import {AvatarComponent} from './component/avatar/avatar.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [RxStompService, ProgressWebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
