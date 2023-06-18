import { Component, OnInit } from '@angular/core';
import { filter, switchMap } from 'rxjs/operators';
import { AgentDataService } from '@base/services/agent-data-service.service';
import { Agent, AgentsService } from 'spacetraders-angular-client';

@Component({
  selector: 'app-agent-information',
  templateUrl: './agent-information.component.html',
  styleUrls: ['./agent-information.component.css']
})
export class AgentInformationComponent implements OnInit {

    agent: Agent | undefined;

    constructor(
      private agentDataService: AgentDataService,
      private agentService: AgentsService
    ) { }

    ngOnInit(): void {
      this.agentDataService.getAgentLoggedObservable()
      .pipe(
        filter((isLogged) => isLogged),
        switchMap(() => this.agentService.getMyAgent())
      )
      .subscribe({
        next: (response) => {
          this.agent = response.data;
        },
        error: (err) => {
          this.agent = undefined;
        }
      });
    }
}

