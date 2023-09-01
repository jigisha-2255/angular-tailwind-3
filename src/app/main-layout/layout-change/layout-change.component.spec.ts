import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChangeComponent } from './layout-change.component';

describe('LayoutChangeComponent', () => {
  let component: LayoutChangeComponent;
  let fixture: ComponentFixture<LayoutChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
