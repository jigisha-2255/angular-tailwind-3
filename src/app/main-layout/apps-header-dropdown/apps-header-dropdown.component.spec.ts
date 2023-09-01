import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsHeaderDropdownComponent } from './apps-header-dropdown.component';

describe('AppsHeaderDropdownComponent', () => {
  let component: AppsHeaderDropdownComponent;
  let fixture: ComponentFixture<AppsHeaderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsHeaderDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsHeaderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
