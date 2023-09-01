import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderDropdownComponent } from './profile-header-dropdown.component';

describe('ProfileHeaderDropdownComponent', () => {
  let component: ProfileHeaderDropdownComponent;
  let fixture: ComponentFixture<ProfileHeaderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHeaderDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHeaderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
