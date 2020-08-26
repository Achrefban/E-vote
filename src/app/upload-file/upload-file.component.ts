import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent  {

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

  private submitted: boolean;

  constructor(
      public fb: FormBuilder,
      private cd: ChangeDetectorRef
  ) {}

  /*##################### Registration Form #####################*/
  registrationForm = this.fb.group({
    file: [null]
  })

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any ;
  editFile = true;
  removeUpload = false;

  uploadFile(event) {
    const reader = new FileReader(); // HTML5 FileReader API
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    const newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.registrationForm.patchValue({
      file: [null]
    });
  }

  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      console.log('false')
      return false;
    } else {
      console.log(this.registrationForm.value)
      console.log('done')
    }
  }

}

