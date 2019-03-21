import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration-step-four',
  templateUrl: './registration-step-four.component.html',
  styleUrls: ['./registration-step-four.component.scss']
})
export class RegistrationStepFourComponent {

  @Input() current: Number;
  @Input() form: any;

  @Output()
  public currentChanged: EventEmitter<boolean> = new EventEmitter();


  onSubmit() {
    return;
  }

  onCancell() {
    this.currentChanged.emit(true);
  }

}
