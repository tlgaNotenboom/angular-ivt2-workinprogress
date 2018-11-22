import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given a titel should show title on page', () => {
    // Arrange
    const title = 'From unit test';
    component.title = title;
    fixture.detectChanges();

    // Act
    const header: HTMLElement = fixture.nativeElement;
    const h1div = header.querySelector('H1');

    // Assert
    expect(h1div.textContent).toEqual(title);
  });

});
