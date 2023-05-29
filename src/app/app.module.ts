import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgentInformationComponent } from '@base/view/agent-information/agent-information.component';
import { ServerStatusComponent } from '@base/view/server-status/server-status.component';
import { SpaceTradersApiModule } from 'spacetraders-angular-client';
import { AuthorizationBearerHeaderInterceptor } from '@base/interceptors/bearer-token-interceptor';
import { SystemInformationComponent } from './view/system-information/system-information.component';
import { WaypointListComponent } from './view/waypoint/waypoint-list/waypoint-list.component';
import { WaypointInformationComponent } from './view/waypoint/waypoint-information/waypoint-information.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentInformationComponent,
    ServerStatusComponent,
    SystemInformationComponent,
    WaypointInformationComponent,
    WaypointListComponent
  ],
  imports: [
    SpaceTradersApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationBearerHeaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
