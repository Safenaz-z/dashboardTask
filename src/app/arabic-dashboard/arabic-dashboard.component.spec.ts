import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicDashboardComponent } from './arabic-dashboard.component';

describe('ArabicDashboardComponent', () => {
  let component: ArabicDashboardComponent;
  let fixture: ComponentFixture<ArabicDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabicDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
