import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CandidatsService } from '../shared/services/candidats.service';
import { ElectionTypeService } from '../shared/services/election-type.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [CandidatsService,ElectionTypeService]

})

export class UserProfileComponent implements OnInit {

  candidat: any = {};
  error: string;
  elections: any [];
  private submitted: boolean;
  candidats: any = [];
  showModal: any;
  candidatId: any;
  searchText: any;

  constructor(private router: Router, private candidatService: CandidatsService, private  electionTypeService: ElectionTypeService, public fb: FormBuilder,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllElectionType();
    this.getAllCandidats();
  }
  getAllElectionType() {
    this.electionTypeService.getAllElectionType().subscribe(data => {
      if (data) {
        this.elections = data;
      }
    });
  }
  register() {
    console.log(this.candidat)
    this.candidatService.newCandidat(this.candidat).subscribe(data => {
      console.log(data)
      if (!data.errors) {
        this.router.navigate(['dashborad']);
      } else {
        this.error = 'Votre formulaire est incomplet ou comporte des erreurs !';
        console.log('err test candidat');
      }
    });
  }

  /*##################### Registration Form #####################*/
  registrationForm = this.fb.group({
    file: [null]
  })

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
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
      return false;
    } else {
      console.log(this.registrationForm.value)
    }
  }


  getAllCandidats() {
    this.candidatService.getAllCandidats().subscribe(data => {
      if (data) {
        this.candidats = data;
      }
    });
  }

  delete() {
    console.log(this.candidatId);
    return this.candidatService.deleteCandidats(this.candidatId).subscribe(data => {alert('succes')});

  }




}
