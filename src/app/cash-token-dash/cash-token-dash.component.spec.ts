import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTokenDashComponent } from './cash-token-dash.component';

describe('CashTokenDashComponent', () => {
  let component: CashTokenDashComponent;
  let fixture: ComponentFixture<CashTokenDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashTokenDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashTokenDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
