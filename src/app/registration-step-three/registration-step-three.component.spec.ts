import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepThreeComponent } from './registration-step-three.component';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RegistrationStepThreeComponent', () => {
  let component: RegistrationStepThreeComponent;
  let fixture: ComponentFixture<RegistrationStepThreeComponent>;
  let compile: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationStepThreeComponent,
        ImageModalComponent,
        UploadImageComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on button click', function() {
    it('should not call the function "onNext" on button 2 because it is disabled', function() {
      spyOn(component, 'onNext').and.callThrough();

      const buttons = compile.getElementsByClassName('btn');
      buttons[1].click();

      expect(buttons[1].disabled).toBeFalsy();
      expect(component.onNext).not.toHaveBeenCalled();
    });
  });
});

