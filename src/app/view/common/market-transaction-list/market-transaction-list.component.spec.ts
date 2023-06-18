import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTransactionListComponent } from './market-transaction-list.component';

describe('MarketTransactionListComponent', () => {
  let component: MarketTransactionListComponent;
  let fixture: ComponentFixture<MarketTransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketTransactionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
