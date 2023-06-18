import { Component, Input } from '@angular/core';
import { TradeGood } from 'spacetraders-angular-client';

@Component({
  selector: 'app-tradegoods-list',
  templateUrl: './tradegoods-list.component.html',
  styleUrls: ['./tradegoods-list.component.css']
})
export class TradegoodsListComponent {
  @Input()
  elements!: TradeGood[];
}
