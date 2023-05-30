import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Agent, AgentsService } from 'spacetraders-angular-client';

@Injectable({
  providedIn: 'root'
})
export class AgentDataService {

  private agentIsLogged$ = new BehaviorSubject<boolean>(false);
  private agent$ = new BehaviorSubject<Agent | undefined>(undefined);
  private _agentToken: string = '';

  constructor(
    private agentService: AgentsService
  ) { }

  get agentToken(): string {
    return this._agentToken;
  }

  getAgentLoggedObservable(): Observable<boolean> {
    return this.agentIsLogged$.asObservable();
  }

  getAgentObservable(): Observable<Agent | undefined> {
    return this.agent$.asObservable();
  }

  setAgentToken(token: string) {
    console.log('setAgentToken');
    this._agentToken = token;
    this.agentService.getMyAgent()
    .subscribe(
      {
        next: (response) => {
          console.log('Token submission result : ', response.data);
          this._agentToken = token;
          this.agentIsLogged$.next(true);
          this.agent$.next(response.data);
        },
        error: (err) => {
          console.log('Token submission error : ', err);
          this._agentToken = '';
          this.agentIsLogged$.next(false);
          this.agent$.next(undefined);
        }
      });
  }
}
