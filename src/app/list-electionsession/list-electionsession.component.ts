import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CandidatsService} from '../shared/services/candidats.service';
import {ElectionTypeService} from '../shared/services/election-type.service';
import {ElectionSessionService} from '../shared/services/election-session.service';
import {FormBuilder} from '@angular/forms';
import {ElectionService} from '../shared/services/election.service';

@Component({
  selector: 'app-list-electionsession',
  templateUrl: './list-electionsession.component.html',
  styleUrls: ['./list-electionsession.component.scss'],
  providers: [CandidatsService, ElectionTypeService, ElectionService]
})
export class ListElectionsessionComponent implements OnInit {

  electionsSession: any[];
  candidatElection: any;
  election =  {};
  etat: string;
  candidats =  {};
  dropdownList = [];
  elections = [];
  dropdownSettings = {};
  dropdownSettingsElection = {};
  private error: string;
  searchText: any;
  constructor(private router: Router, private candidatService: CandidatsService,
              private electionTypeService: ElectionTypeService,
              private electionsessionService: ElectionSessionService,
              public fb: FormBuilder,
              private cd: ChangeDetectorRef) { }
  async ngOnInit() {
    this.getAllCandidats();

    this.getAllElectionType()
    console.log(this.dropdownList);
    //console.log('testlist',this.dropdownList)
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'firstname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    console.log('testlist', this.election)
    this.dropdownSettingsElection = {
      singleSelection: true,
      idField: '_id',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    await this.getAllElections();
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  getAllCandidats() {
    this.candidatService.getAllCandidats().subscribe(data => {
      if (data) {
        console.log(data);
        this.dropdownList = data;
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



  getAllElections() {
    this.electionsessionService.getAllElection().subscribe(data => {
      if (data) {
        this.electionsSession = data;
        this.setElectionSession();
      }
    });
  }

  setElectionSession() {
    for (let i = 0; i < this.electionsSession.length ; i++  ) {
      for (let k = 0; k < this.elections.length ; k++  ) {
        if ( this.electionsSession[i].electionName[0] === this.elections[k]._id ) {
          this.electionsSession[i].electionName[0] = this.elections[k];
        }
      }
      for (let k = 0; k < this.electionsSession[i].candidatElection.length ; k++  ) {
        for (let h = 0; h < this.dropdownList.length ; h++  ) {
          if ( this.electionsSession[i].candidatElection[k]  === this.dropdownList[h]._id ) {
            this.electionsSession[i].candidatElection[k] =  this.dropdownList[h];
          }
        }
      }
    }
    console.log("testtttttt", this.electionsSession);
  }


  add() {
    console.log('test5' , this.election)
    this.electionsessionService.newElection(this.election).subscribe(data => {
      console.log(data)
      if (!data.errors) {
        this.router.navigate(['dashborad']);
      } else {
        this.error = 'Votre formulaire est incomplet ou comporte des erreurs !';
        console.log('err test');
      }
    });

  }



}
