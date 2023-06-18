import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


/**
 * Get the system from the waypoint symbol
 * @param waypointSymbol the waypoint symbol
 * @returns the system symbol
 */
  getSystemFromWaypoint(waypointSymbol: string): string {
    const regex = /^([^-]+-[^-]+)/;
    let symbol = waypointSymbol;
    const match = symbol.match(regex);
    if (match && match.length >= 2) {
      symbol = match[1];
    }
    return symbol;
  }
}
