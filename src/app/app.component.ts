import { Component, OnInit } from '@angular/core';
import { AgentDataService } from './services/agent-data-service.service';
import { Agent } from 'spacetraders-angular-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private agentDataService: AgentDataService,
  ) {}

  title = 'spacetrader-ui';
  agent: Agent | undefined;


  ngOnInit(): void {
    this.agentDataService.getAgentObservable()
    .subscribe({
      next: (agent) => {
        this.agent = agent;
      }
    });
  }

}
