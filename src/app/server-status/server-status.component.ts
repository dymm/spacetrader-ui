import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'spacetraders-angular-client';
import { AgentDataService } from '../services/agent-data-service.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {

  /**
   * The current status of the game server.
   */
    status: string | undefined;
    /**
     * The current version of the API.
     */
    version: string | undefined;

  constructor(
    private agentDataService: AgentDataService,
    private defaultService: DefaultService
  ) { }

  ngOnInit(): void {
    this.agentDataService.getAgentLoggedObservable()
    .pipe(
      switchMap(() => this.defaultService.getStatus())
    )
    .subscribe(
      (status) => {
        this.status = status.status;
        this.version = status.version;
      },
      (err) => {
        this.status = undefined;
        this.version = undefined;
      }
    );
  }

}

