import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent {

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
