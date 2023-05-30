import { Component, OnInit } from '@angular/core';
import { AgentDataService } from '@base/services/agent-data-service.service';
import { EMPTY, switchMap } from 'rxjs';
import { Agent, System, SystemsService } from 'spacetraders-angular-client';

@Component({
  selector: 'app-system-information',
  templateUrl: './system-information.component.html',
  styleUrls: ['./system-information.component.css']
})
export class SystemInformationComponent implements OnInit {

  system: System | undefined;

  constructor(
    private agentDataService: AgentDataService,
    private systemsService: SystemsService
  ) { }

  ngOnInit(): void {
    this.agentDataService.getAgentObservable()
    .pipe(
      switchMap((agent: Agent | undefined) => {
        if (agent === undefined) {
          this.system = undefined;
          return EMPTY;
        }
        const regex = /^([^-]+-[^-]+)/;
        const match = agent.headquarters.match(regex);
        if (match === null || match.length < 2) {
          return EMPTY;
        }
        return this.systemsService.getSystem(match[1]);
      })
    )
    .subscribe({
      next: (response) => {
        console.log('SystemInformationComponent: ', response.data);
        this.system = response.data;
      }
    });
  }
}
