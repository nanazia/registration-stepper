import { Component, Output, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';
import { EventEmitter } from '@angular/core';
import { IRegistrationForm } from '../registration/IRegistrationForm';

@Component({
  selector: 'app-registration-step-one',
  templateUrl: './registration-step-one.component.html',
  styleUrls: ['./registration-step-one.component.scss']
})
export class RegistrationStepOneComponent {

  @Input() current: Number;

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email : ['', [ Validators.required, Validators.email ]],
      password: ['', Validators.required],
      'password-check': ['', Validators.required]
    }, {
      validator: PasswordValidators.isPasswordTheSame
    });
  }

  get email() { return this.form.get('email'); }

  get password() { return this.form.get('password'); }

  get passwordCheck() { return this.form.get('password-check'); }

  @Output()
  public formChanged: EventEmitter<IRegistrationForm> = new EventEmitter();

  onNext() {
    const form = this.form.value;
    delete form['password-check'];
    this.formChanged.emit(form);
  }


}
