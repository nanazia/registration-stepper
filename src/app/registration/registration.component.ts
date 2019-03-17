import { Component } from '@angular/core';
import { IRegistrationForm } from './IRegistrationForm';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  current = 0;

  form: IRegistrationForm;

  public handleStateChanged(formData: any): void {
    this.form = {...this.form, ...formData};
    this.current = this.current + 1;
  }

  public handleCurrentChanged(cancelled: boolean) {
    if (cancelled) {
      this.current = this.current - 1;
    }
  }

}
