import { Component, Input } from '@angular/core';
import { Market } from 'spacetraders-angular-client';

@Component({
  selector: 'app-market-information',
  templateUrl: './market-information.component.html',
  styleUrls: ['./market-information.component.css']
})
export class MarketInformationComponent {
  @Input()
  market!: Market;
}
