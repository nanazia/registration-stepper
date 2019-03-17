import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageComponent } from './upload-image.component';

describe('UploadImageComponent', () => {
  let component: UploadImageComponent;
  let fixture: ComponentFixture<UploadImageComponent>;
  let compile: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on button click', function() {
    it('should call the function "onCancel" on button 1', function() {
      spyOn(component, 'onCancel').and.callThrough();

      const buttons = compile.getElementsByClassName('btn');
      buttons[0].click();

      expect(component.onCancel).toHaveBeenCalledWith();
    });

    it('should not call the function "onUpload" on button 2 because it is disabled', function() {
      spyOn(component, 'onUpload').and.callThrough();

      const buttons = compile.getElementsByClassName('btn');
      buttons[1].click();

      expect(buttons[1].disabled).toBeTruthy();
      expect(component.onUpload).not.toHaveBeenCalledWith();
    });

    it('should call the function "onUpload" on button 2 because imgUrl is not empty', function() {
      spyOn(component, 'onUpload').and.callThrough();
      component.imgURL = true;
      fixture.detectChanges();

      const buttons = compile.getElementsByClassName('btn');
      buttons[1].click();

      expect(buttons[1].disabled).toBeFalsy();
      expect(component.onUpload).toHaveBeenCalledWith();
    });
  });

});
