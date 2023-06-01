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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

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
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,
    MatTableModule, MatPaginatorModule,
    MatChipsModule, MatTooltipModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationBearerHeaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
