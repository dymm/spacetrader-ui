import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLoginComponent } from './agent-login.component';

describe('AgentStatusComponent', () => {
  let component: AgentLoginComponent;
  let fixture: ComponentFixture<AgentLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
