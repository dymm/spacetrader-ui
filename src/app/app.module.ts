import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { FormsModule } from '@angular/forms';
import { ServerStatusComponent } from './server-status/server-status.component';
import { SpaceTradersApiModule } from 'spacetraders-angular-client';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgentLoginComponent,
    ServerStatusComponent,
  ],
  imports: [
    SpaceTradersApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
