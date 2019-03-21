import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { StepperComponent } from '../stepper/stepper.component';
import { RegistrationStepOneComponent } from '../registration-step-one/registration-step-one.component';
import { RegistrationStepTwoComponent } from '../registration-step-two/registration-step-two.component';
import { RegistrationStepThreeComponent } from '../registration-step-three/registration-step-three.component';
import { RegistrationStepFourComponent } from '../registration-step-four/registration-step-four.component';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { ModalComponent } from '../modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GroupsService } from '../services/groups/groups.service';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationComponent,
        RegistrationStepOneComponent,
        RegistrationStepTwoComponent,
        RegistrationStepThreeComponent,
        RegistrationStepFourComponent,
        StepperComponent,
        UploadImageComponent,
        ModalComponent
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
      ],
      providers: [
        GroupsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrement current by 1', () => {
    component.current = 2;

    component.handleStateChanged('test');
    fixture.detectChanges();

    expect(component.current).toBe(3);
  });

  it('should increment current by 1', () => {
    component.current = 2;

    component.handleCurrentChanged(true);
    fixture.detectChanges();

    expect(component.current).toBe(1);
  });

});
