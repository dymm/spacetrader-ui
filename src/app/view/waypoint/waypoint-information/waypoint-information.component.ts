import { Component, Input } from '@angular/core';
import { Waypoint } from 'spacetraders-angular-client';

@Component({
  selector: 'app-waypoint-information',
  templateUrl: './waypoint-information.component.html',
  styleUrls: ['./waypoint-information.component.css']
})
export class WaypointInformationComponent {

  @Input()
  waypoint!: Waypoint;
  
}
