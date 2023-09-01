import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsHeaderDropdownComponent } from './layouts-header-dropdown.component';

describe('LayoutsHeaderDropdownComponent', () => {
  let component: LayoutsHeaderDropdownComponent;
  let fixture: ComponentFixture<LayoutsHeaderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsHeaderDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutsHeaderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
