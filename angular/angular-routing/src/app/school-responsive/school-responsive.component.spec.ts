import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolResponsiveComponent } from './school-responsive.component';

describe('SchoolResponsiveComponent', () => {
  let component: SchoolResponsiveComponent;
  let fixture: ComponentFixture<SchoolResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
