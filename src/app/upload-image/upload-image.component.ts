import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {

  public imagePath;
  imgURL: any;
  public message: string;

  @Output()
  public imageUpload: EventEmitter<any> = new EventEmitter();
  @Output()
  public imageUploadCancelled: EventEmitter<any> = new EventEmitter();

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);

    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  onUpload() {
    this.imageUpload.emit(this.imgURL);
  }

  onCancel() {
    this.imageUploadCancelled.emit(true);
  }


}
