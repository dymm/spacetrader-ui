import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DefaultService } from 'spacetraders-angular-client';

@Injectable({
  providedIn: 'root'
})
export class AgentDataService {

  private agentIsLogged$ = new BehaviorSubject<boolean>(false);
  private _agentToken: string = '';

  constructor(
    private defaultService: DefaultService
  ) { }

  get agentToken(): string {
    return this._agentToken;
  }

  getAgentLoggedObservable(): Observable<boolean> {
    return this.agentIsLogged$.asObservable();
  }

  setAgentToken(token: string) {
    console.log('setAgentToken');
    this._agentToken = token;
    this.defaultService.getStatus()
    .subscribe(
      (status) => {
        console.log('Token submission result : ', status);
        this._agentToken = token;
        this.agentIsLogged$.next(true);
      },
      (err) => {
        console.log('Token submission error : ', err);
        this._agentToken = '';
        this.agentIsLogged$.next(false);
      }
    );
  }
}
