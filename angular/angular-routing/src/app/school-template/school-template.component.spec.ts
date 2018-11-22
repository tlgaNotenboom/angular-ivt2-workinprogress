import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTemplateComponent } from './school-template.component';
import { FormsModule } from '@angular/forms';

describe('SchoolTemplateComponent', () => {
  let component: SchoolTemplateComponent;
  let fixture: ComponentFixture<SchoolTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
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

  it('should use input', () => {
      const uiElement: HTMLInputElement = fixture.nativeElement.querySelector('#NameSchool');

      uiElement.value = 'Test Name';

      const event = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
      event.initCustomEvent('input', false, false, null);

      uiElement.dispatchEvent(event);

      fixture.detectChanges();
  });
});
