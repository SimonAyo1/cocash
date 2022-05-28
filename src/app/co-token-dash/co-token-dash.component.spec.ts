import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoTokenDashComponent } from './co-token-dash.component';

describe('CoTokenDashComponent', () => {
  let component: CoTokenDashComponent;
  let fixture: ComponentFixture<CoTokenDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoTokenDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoTokenDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
