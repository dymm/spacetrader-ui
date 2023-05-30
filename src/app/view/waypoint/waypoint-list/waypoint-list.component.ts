import { Component, Input, OnInit } from '@angular/core';
import { AgentDataService } from '@base/services/agent-data-service.service';
import { SystemsService, Waypoint } from 'spacetraders-angular-client';

@Component({
  selector: 'app-waypoint-list',
  templateUrl: './waypoint-list.component.html',
  styleUrls: ['./waypoint-list.component.css']
})
export class WaypointListComponent implements OnInit {

  @Input()
  location!: string;

  waypoints: Waypoint[] = [];

  constructor(
    private agentDataService: AgentDataService,
    private systemsService: SystemsService
  ) { }

  ngOnInit(): void {
    this.agentDataService.getAgentObservable()
    .subscribe({
      next: (agent) => {
        if (!this.location || !agent) {
          return;
        }
        const regex = /^([^-]+-[^-]+)/;
        const match = this.location.match(regex);
        if (match === null || match.length < 2) {
          return;
        }
        this.systemsService.getSystemWaypoints(match[1])
        .subscribe({
          next: (response) => {
            console.log('WaypointListComponent: ', response.data);
            this.waypoints = response.data;
          }
        });
      }
    });
  }
}