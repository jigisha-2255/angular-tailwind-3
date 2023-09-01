import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesHeaderDropdownComponent } from './pages-header-dropdown.component';

describe('PagesHeaderDropdownComponent', () => {
  let component: PagesHeaderDropdownComponent;
  let fixture: ComponentFixture<PagesHeaderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesHeaderDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesHeaderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
