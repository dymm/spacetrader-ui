import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgentInformationComponent } from '@base/view/agent-information/agent-information.component';
import { ServerStatusComponent } from '@base/view/server-status/server-status.component';
import { SpaceTradersApiModule } from 'spacetraders-angular-client';
import { AuthorizationBearerHeaderInterceptor } from '@base/interceptors/bearer-token-interceptor';
import { SystemInformationComponent } from './view/system-information/system-information.component';
import { WaypointListComponent } from './view/waypoint/waypoint-list/waypoint-list.component';
import { WaypointInformationComponent } from './view/waypoint/waypoint-information/waypoint-information.component';
import { MarketInformationComponent } from './view/waypoint/market-information/market-information.component';
import { TradegoodsListComponent } from './view/common/tradegoods-list/tradegoods-list.component';
import { MarketTransactionListComponent } from './view/common/market-transaction-list/market-transaction-list.component';
import { ShipListComponent } from './view/ship/ship-list/ship-list.component';
import { MainViewComponent } from './view/main-view/main-view.component';

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
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginViewComponent } from './login/login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentInformationComponent,
    ServerStatusComponent,
    SystemInformationComponent,
    WaypointInformationComponent,
    WaypointListComponent,
    MarketInformationComponent,
    TradegoodsListComponent,
    MarketTransactionListComponent,
    ShipListComponent,
    MainViewComponent,
    LoginViewComponent,
  ],
  imports: [
    SpaceTradersApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,
    MatTableModule, MatPaginatorModule,
    MatChipsModule, MatTooltipModule,
    MatTabsModule, MatListModule, MatBadgeModule,
    MatSidenavModule,MatMenuModule,MatToolbarModule,
    MatGridListModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationBearerHeaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }