import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  buttonText = '';

  isModalShown = false;

  @Output()
  public imageUpload: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

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
