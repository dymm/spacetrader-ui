import { Injectable } from '@angular/core';
import { Market, SystemsService, Waypoint } from 'spacetraders-angular-client';
import { UtilsService } from './utils.service';
import { Observable, switchMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaypointDataService {

  constructor(
    private utilsService: UtilsService,
    private systemsService: SystemsService,
    ) { }

  getWaypoint(symbol: string): Observable<Waypoint>  {
    const systemSymbol = this.utilsService.getSystemFromWaypoint(symbol);
    return this.systemsService.getWaypoint(systemSymbol, symbol)
    .pipe(
      switchMap((response) => {
        return of(response.data);
      })
    );
  }

  getMarket(symbol: string): Observable<Market>  {
    const systemSymbol = this.utilsService.getSystemFromWaypoint(symbol);
    return this.systemsService.getMarket(systemSymbol, symbol)
    .pipe(
      switchMap((response) => {
        return of(response.data);
      })
    );
  }
}
