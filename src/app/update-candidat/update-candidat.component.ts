import { Component, OnInit } from '@angular/core';
import { CandidatsService } from '../shared/services/candidats.service';
import {ElectionTypeService} from '../shared/services/election-type.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';


@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.scss'],
  providers: [CandidatsService, ElectionTypeService]
})
export class UpdateCandidatComponent implements OnInit {
  candidat: any = {};
  candidatId: any;
  error: any;
  success: any;
  elections: any [];
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private candidatService: CandidatsService, private  electionTypeService: ElectionTypeService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.getAllElectionType();
    this.candidatId = this.route.snapshot.paramMap.get('id');

    this.candidatService.getCandidatById(this.candidatId).subscribe(data => {
      if (!data.errors) {
        this.candidat = data;
      } else {
        this.error = 'une erreur s est produite !';
      }
    });
  }
  update() {
    this.success = '';
    this.error = '';
    this.candidatService.updateCandidat(this.candidatId, this.candidat).subscribe(data => {
      if (!data.errors) {
        localStorage.setItem('candidat', JSON.stringify(data));
        this.success = 'Les modifications ont été enregistrées avec succès.';
        this.router.navigate(['candidat-list']);
      } else {
        this.error = 'une erreur s est produite veuillez vérifier vos informations !';
      }
    });
  }
  getAllElectionType() {
    this.electionTypeService.getAllElectionType().subscribe(data => {
      if (data) {
        this.elections = data;
      }
    });
  }

}



