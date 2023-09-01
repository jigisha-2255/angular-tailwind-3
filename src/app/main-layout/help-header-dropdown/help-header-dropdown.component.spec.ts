import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpHeaderDropdownComponent } from './help-header-dropdown.component';

describe('HelpHeaderDropdownComponent', () => {
  let component: HelpHeaderDropdownComponent;
  let fixture: ComponentFixture<HelpHeaderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpHeaderDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpHeaderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
