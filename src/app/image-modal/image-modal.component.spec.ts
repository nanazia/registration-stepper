import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageModalComponent } from './image-modal.component';
import { UploadImageComponent } from '../upload-image/upload-image.component';

describe('ImageModalComponent', () => {
  let component: ImageModalComponent;
  let fixture: ComponentFixture<ImageModalComponent>;
  let compile: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageModalComponent, UploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be idden in initialization', () => {
    expect(compile.querySelector('.show')).toBeFalsy();
  });

  it('should render "Avatar"', () => {
    expect(compile.querySelector('.title').innerHTML).toContain('Avatar');
  });

  // tslint:disable-next-line:max-line-length
  it('should render "User avatar. It is recommended that you use a file with the GIF or PNG format. The recommended size is 512x512 pixels."', () => {
    // tslint:disable-next-line:max-line-length
    expect(compile.querySelector('.desc').innerHTML).toContain('User avatar. It is recommended that you use a file with the GIF or PNG format. The recommended size is 512x512 pixels.');
  });

  it('should be hidden in initialization', () => {
    spyOn(component.imageUpload, 'emit');
    component.isModalShown = true;
    fixture.detectChanges();

    component.handleStateChanged('123');

    expect(component.imageUpload.emit).toHaveBeenCalled();
    expect(component.isModalShown).toBe(false);
  });

});
