import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperComponent } from './stepper.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-test-component-wrapper',
  template: '<app-stepper [current]="current"></app-stepper>'
})
class TestWrapperComponent {
  current = 3;
}

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let compile: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperComponent, TestWrapperComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when current is avaiable', function() {

    it('should render four buttons', () => {
      expect(compile.getElementsByClassName('btn').length).toBe(4);
     });

  });

});

