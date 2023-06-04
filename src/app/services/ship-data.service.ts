import { Injectable } from '@angular/core';
import { Observable, of, switchMap, throwError } from 'rxjs';
import { FleetService, Ship } from 'spacetraders-angular-client';

export interface Meta {
  total: number;
  page: number;
  limit: number;
}

export interface ShipData {
  data: Ship[];
  meta: Meta;
}

@Injectable({
  providedIn: 'root'
})
export class ShipDataService {

  constructor(
    private fleetService: FleetService,
  ) { }

  /**
   * List Ships
   * Retrieve all of your ships.
   * @param page What entry offset to request
   * @param limit How many entries to return per page
   * @returns Observable<ShipData>
   */
  getMyShips(page?: number, limit?: number): Observable<ShipData> {
    return this.fleetService.getMyShips(page, limit)
    .pipe(
      switchMap(
        response => {
          return of(response as ShipData);
        }
      )
    );
  }
}
