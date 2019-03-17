import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepThreeComponent } from './registration-step-three.component';
import { ModalComponent } from '../modal/modal.component';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RegistrationStepThreeComponent', () => {
  let component: RegistrationStepThreeComponent;
  let fixture: ComponentFixture<RegistrationStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationStepThreeComponent,
        ModalComponent,
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
