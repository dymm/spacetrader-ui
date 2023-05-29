import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AgentDataService } from '../services/agent-data-service.service';
import { Agent, AgentsService } from 'spacetraders-angular-client';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {

    agent: Agent | undefined;

    constructor(
      private agentDataService: AgentDataService,
      private agentService: AgentsService
    ) { }

    ngOnInit(): void {
      this.agentDataService.getAgentLoggedObservable()
      .pipe(
        switchMap(() => this.agentService.getMyAgent())
      )
      .subscribe(
        (response) => {
          this.agent = response.data;
        },
        (err) => {
          this.agent = undefined;
        }
      );
    }

    submit(token: string) {
      console.log('Submit token', token);
      this.agentDataService.setAgentToken(token);
    }
}

