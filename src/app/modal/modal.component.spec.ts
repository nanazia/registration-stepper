import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { UploadImageComponent } from '../upload-image/upload-image.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let compile: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent, UploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
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
