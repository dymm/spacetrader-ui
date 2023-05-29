import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'spacetraders-angular-client';

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
    private defaultService: DefaultService
  ) { }

  ngOnInit(): void {
    this.defaultService.getStatus()
    .subscribe({
      next: (status) => {
        this.status = status.status;
        this.version = status.version;
      },
      error: (err) => {
        this.status = undefined;
        this.version = undefined;
      }
    });
  }
}

