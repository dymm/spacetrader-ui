import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MarketTransaction } from 'spacetraders-angular-client';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-market-transaction-list',
  templateUrl: './market-transaction-list.component.html',
  styleUrls: ['./market-transaction-list.component.css']
})
export class MarketTransactionListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @Input()
  transactions!: MarketTransaction[];

  displayedColumns: string[] = ['shipSymbol', 'tradeSymbol', 'type', 'units', 'pricePerUnit', 'totalPrice', 'timestamp'];
  dataSource = new MatTableDataSource<MarketTransaction>(this.transactions);
  pageSize = 5;
  pageIndex = 0;

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(!this.paginator) {
      throw new Error('MatPaginator is undefined');
    }
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: { pageIndex: number, pageSize: number }) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
}
