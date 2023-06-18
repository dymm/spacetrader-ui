import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AgentDataService } from '@base/services/agent-data-service.service';
import { ShipDataService } from '@base/services/ship-data.service';
import { Ship } from 'spacetraders-angular-client';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements AfterViewInit {


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
 

  dataSource = new MatTableDataSource<Ship>([]);
  displayedColumns: string[] = ['symbol', 'role', 'waypointSymbol', 'destination', 'fuel', 'cargoCapacity'];


  constructor(
    private agentDataService: AgentDataService,
    private shipDataService: ShipDataService,
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.agentDataService.getAgentObservable().subscribe({
      next: (agent) => {
        if(agent) {
          this.getMyShips();
        } else {
          this.dataSource.data = [];
        }
      }
    });
  }

  private getMyShips(): void {
    this.shipDataService.getMyShips(this.paginator?.pageIndex, this.paginator?.pageSize)
    .subscribe({
      next: (shipData) => {
        this.dataSource.data = shipData.data;
      },
      error: () => {
        this.dataSource.data = [];
      }
    });
  }

}
