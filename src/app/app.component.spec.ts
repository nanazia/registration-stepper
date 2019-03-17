import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationStepOneComponent } from './registration-step-one/registration-step-one.component';
import { RegistrationStepTwoComponent } from './registration-step-two/registration-step-two.component';
import { RegistrationStepThreeComponent } from './registration-step-three/registration-step-three.component';
import { RegistrationStepFourComponent } from './registration-step-four/registration-step-four.component';
import { StepperComponent } from './stepper/stepper.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GroupsService } from './services/groups/groups.service';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compile: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
