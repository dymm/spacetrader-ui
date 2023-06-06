import { Component } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {

  displaySystem = false;
  displayShipList = false;

  toggleDashboard() {
    console.log('showDashboard()');
    this.displaySystem = !this.displaySystem;
  }

  toggleShipList() {
    console.log('showShipList()');
    this.displayShipList = !this.displayShipList;
  }
    
}
