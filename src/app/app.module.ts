import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationStepOneComponent } from './registration-step-one/registration-step-one.component';
import { RegistrationStepTwoComponent } from './registration-step-two/registration-step-two.component';
import { RegistrationStepThreeComponent } from './registration-step-three/registration-step-three.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { RegistrationStepFourComponent } from './registration-step-four/registration-step-four.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { StepperComponent } from './stepper/stepper.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RegistrationStepOneComponent,
    RegistrationStepTwoComponent,
    RegistrationStepThreeComponent,
    UploadImageComponent,
    RegistrationStepFourComponent,
    ModalComponent,
    StepperComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
