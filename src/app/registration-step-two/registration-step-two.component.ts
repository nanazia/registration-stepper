import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IRegistrationForm } from '../registration/IRegistrationForm';
import { GroupsService } from '../services/groups/groups.service';

@Component({
  selector: 'app-registration-step-two',
  templateUrl: './registration-step-two.component.html',
  styleUrls: ['./registration-step-two.component.scss']
})
export class RegistrationStepTwoComponent {

  @Input() current: Number;

  form: FormGroup;

  constructor(fb: FormBuilder, private service: GroupsService ) {
    this.form = fb.group({
      group : ['', [ Validators.required ]]
    });
  }

  groups = this.service.getGroups();

  get group() { return this.form.get('group'); }

  @Output()
  public formChanged: EventEmitter<IRegistrationForm> = new EventEmitter();

  @Output()
  public currentChanged: EventEmitter<boolean> = new EventEmitter();

  onNext() {
    this.formChanged.emit(this.form.value);
  }

  onCancell() {
    this.currentChanged.emit(true);
  }

}
