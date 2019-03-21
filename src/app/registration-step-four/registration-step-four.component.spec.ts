import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepFourComponent } from './registration-step-four.component';

describe('RegistrationStepFourComponent', () => {
  let component: RegistrationStepFourComponent;
  let fixture: ComponentFixture<RegistrationStepFourComponent>;
  let compile: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStepFourComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on button click', function() {
    it('should call the function "onCancell" on button 1', function() {
      spyOn(component, 'onCancell').and.callThrough();

      const buttons = compile.getElementsByClassName('btn');
      buttons[0].click();

      expect(component.onCancell).toHaveBeenCalledWith();
    });

    it('should not call the function "onSubmit" on button 2 because it is disabled', function() {
      spyOn(component, 'onSubmit').and.callThrough();

      const buttons = compile.getElementsByClassName('btn');
      buttons[1].click();

      expect(buttons[1].disabled).toBeTruthy();
      expect(component.onSubmit).not.toHaveBeenCalledWith();
    });

    it('should call the function "onSubmit" on button 2', function() {
      spyOn(component, 'onSubmit').and.callThrough();
      component.form = 'aaa';
      fixture.detectChanges();

      const buttons = compile.getElementsByClassName('btn');
      buttons[1].click();

      expect(buttons[1].disabled).toBeFalsy();
      expect(component.onSubmit).toHaveBeenCalledWith();
    });

  });
});
