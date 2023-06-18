import { Component } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {

  displaySystem = true;
  displayShipList = false;

  toggleDashboard() {
    if(this.displaySystem) {
      return;
    }
    this.displayShipList = false;
    this.displaySystem = true;
  }

  toggleShipList() {
    if(this.displayShipList) {
      return;
    }
    this.displaySystem = false;
    this.displayShipList = true;
  }
    
}
