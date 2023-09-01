import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsHeaderDropdownComponent } from './dashboards-header-dropdown.component';

describe('DashboardsHeaderDropdownComponent', () => {
  let component: DashboardsHeaderDropdownComponent;
  let fixture: ComponentFixture<DashboardsHeaderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsHeaderDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardsHeaderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
