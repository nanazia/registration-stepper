import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepOneComponent } from './registration-step-one.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RegistrationStepOneComponent', () => {
  let component: RegistrationStepOneComponent;
  let fixture: ComponentFixture<RegistrationStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStepOneComponent ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
