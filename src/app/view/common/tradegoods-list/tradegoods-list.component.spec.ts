import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradegoodsListComponent } from './tradegoods-list.component';

describe('TradegoodsListComponent', () => {
  let component: TradegoodsListComponent;
  let fixture: ComponentFixture<TradegoodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradegoodsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradegoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
