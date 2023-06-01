import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { Agent, System, SystemsService } from 'spacetraders-angular-client';

@Injectable({
  providedIn: 'root'
})
export class SystemDataService {

  private system$ = new BehaviorSubject<System | undefined>(undefined);

  constructor(
    private systemsService: SystemsService,
  ) { }

  getSystemObservable(): Observable<System | undefined> {
    return this.system$.asObservable();
  }

  /**
   * Select the current system of the agent
   * @param agent the agent
   * @returns the system of the agent
   */
  setSystem(agent: Agent | undefined) {
    if (agent === undefined) {
      this.system$.next(undefined);
      return;
    }
    this.getSystemFromWaypoint(agent.headquarters)
    .subscribe({
      next: (response) => {
        this.system$.next(response);
      },
      error: (error) => {
        console.error(error);
        this.system$.next(undefined);
      }
    });
  }

  getSystemFromWaypoint(waypointSymbol: string): Observable<System> {
    const regex = /^([^-]+-[^-]+)/;
    let symbol = waypointSymbol;
    const match = symbol.match(regex);
    if (match && match.length >= 2) {
      symbol = match[1];
    }
    return this.systemsService.getSystem(symbol)
    .pipe(
      switchMap((response) => {
        return of(response.data);
      })
    );
  }
}
