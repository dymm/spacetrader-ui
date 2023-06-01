import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AgentDataService } from '@base/services/agent-data-service.service';
import { SystemDataService } from '@base/services/system-data.service';
import { System, SystemWaypoint, SystemsService, Waypoint } from 'spacetraders-angular-client';

interface SystemWaypointWithCompleteInformation extends SystemWaypoint {
  completeInformation: Waypoint | undefined;
}

@Component({
  selector: 'app-system-information',
  templateUrl: './system-information.component.html',
  styleUrls: ['./system-information.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SystemInformationComponent implements OnInit, AfterViewInit  {

  system: System | undefined;
  
  dataSource = new MatTableDataSource<SystemWaypointWithCompleteInformation>([]);
  displayedColumns: string[] = ['symbol', 'type'];
  expandedElement: SystemWaypointWithCompleteInformation | null = null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private agentDataService: AgentDataService,
    private systemsService: SystemsService,
    private systemDataService: SystemDataService
  ) { }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.systemDataService.getSystemObservable()
    .subscribe({
      next: (system) => {
        this.setDataSource(system);
      },
      error: () => {
        this.setDataSource(undefined);
      }
    });
    this.agentDataService.getAgentObservable().subscribe({
      next: (agent) => {  
        this.systemDataService.setSystem(agent);
      }
    });
  }

  loadWaypoint(element: SystemWaypointWithCompleteInformation, $event: MouseEvent) {
    $event.stopPropagation();
    if (this.system === undefined || this.expandedElement === element) {
      this.expandedElement = null;
      return;
    }
    if(element.completeInformation !== undefined) {
      this.expandedElement = element;
      return;
    }
    this.systemsService.getWaypoint(this.system.symbol, element.symbol)
    .subscribe({
      next: (response) => {
        element.completeInformation = response.data;
        this.expandedElement = element;
      },
      error: (error) => {
        console.error(error);
        this.expandedElement = null;
      }
    });
  }

  private setDataSource(system: System | undefined): void {
    this.system = system;
    if (system === undefined) {
      this.dataSource.data = [];
      return;
    } else {
      this.dataSource.data = system.waypoints as SystemWaypointWithCompleteInformation[];
    }
  }
}
