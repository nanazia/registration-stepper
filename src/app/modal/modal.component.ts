import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input()
  buttonText = '';

  isModalShown = false;

  @Output()
  public imageUpload: EventEmitter<any> = new EventEmitter();

  handleStateChanged(imageURL) {
    this.imageUpload.emit(imageURL);
    this.isModalShown = false;
  }

  handleCancelImageUpload(value) {
    if (value) {
      this.isModalShown = false;
    }
  }

}
