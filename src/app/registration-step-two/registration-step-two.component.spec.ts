import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepTwoComponent } from './registration-step-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RegistrationStepTwoComponent', () => {
  let component: RegistrationStepTwoComponent;
  let fixture: ComponentFixture<RegistrationStepTwoComponent>;
  let compile: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStepTwoComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStepTwoComponent);
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

    it('should not call the function "onUpload" on button 2 because it is disabled', function() {
      spyOn(component, 'onNext').and.callThrough();

      const buttons = compile.getElementsByClassName('btn');
      buttons[1].click();

      expect(buttons[1].disabled).toBeTruthy();
      expect(component.onNext).not.toHaveBeenCalledWith();
    });

  });
});
