import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegistrationForm } from '../registration/IRegistrationForm';

@Component({
  selector: 'app-registration-step-three',
  templateUrl: './registration-step-three.component.html',
  styleUrls: ['./registration-step-three.component.scss']
})
export class RegistrationStepThreeComponent {

  @Input() current: Number;

  form: FormGroup;
  imgUrl: any = '';
  buttonText = 'Upload avatar';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      avatar : ['', [ Validators.required ]]
    });
  }

  get avatar() { return this.form.get('avatar'); }

  @Output()
  public formChanged: EventEmitter<IRegistrationForm> = new EventEmitter();

  @Output()
  public currentChanged: EventEmitter<boolean> = new EventEmitter();


  onNext() {
    this.formChanged.emit({'avatar': this.imgUrl});
  }

  handleStateChanged(imageURL) {
    this.imgUrl = imageURL;
  }

  onCancell() {
    this.currentChanged.emit(true);
  }

}
