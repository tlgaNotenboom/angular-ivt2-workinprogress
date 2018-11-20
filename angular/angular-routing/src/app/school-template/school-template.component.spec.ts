import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTemplateComponent } from './school-template.component';

describe('SchoolTemplateComponent', () => {
  let component: SchoolTemplateComponent;
  let fixture: ComponentFixture<SchoolTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
