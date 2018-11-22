import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolResponsiveComponent } from './school-responsive.component';

describe('SchoolResponsiveComponent', () => {
  let component: SchoolResponsiveComponent;
  let fixture: ComponentFixture<SchoolResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
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

  it('given submit should set flag', () => {
     const element: HTMLElement = fixture.nativeElement;

     fixture.detectChanges();

     component.onSubmit();

     expect(component.submitted).toBeTruthy();
  });

  it('given valid form should show p with Im valid', () => {
    const element: HTMLElement = fixture.nativeElement;

    component.schoolForm.get('name').setValue('Name');
    component.schoolForm.get('address').setValue('Address');
    component.schoolForm.get('maxNumberOfStudents').setValue('100');

    fixture.detectChanges();

    expect(component.schoolForm.valid).toBeTruthy();

    let ui: HTMLElement = fixture.nativeElement;

    expect(ui.innerHTML).toContain('I\'m valid');
 });

 it('given valid form should show p with Im valid using class selector', () => {
  const element: HTMLElement = fixture.nativeElement;

  component.schoolForm.get('name').setValue('Name');
  component.schoolForm.get('address').setValue('Address');
  component.schoolForm.get('maxNumberOfStudents').setValue('100');

  fixture.detectChanges();

  expect(component.schoolForm.valid).toBeTruthy();

  let ui: HTMLElement = fixture.nativeElement;

  expect(ui.querySelector('.MyValidity').innerHTML).toContain('I\'m valid');
});


});
 