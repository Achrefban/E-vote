import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CandidatsService} from '../shared/services/candidats.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [CandidatsService]
})
export class TableListComponent implements OnInit {

  candidats: any = [];
  showModal: any;
  candidatId: any;
    searchText: any;


  constructor(private router: Router, private candidatService: CandidatsService) { }

  ngOnInit() {
    this.getAllCandidats();
  }
  getAllCandidats() {
    this.candidatService.getAllCandidats().subscribe(data => {
      if (data) {
        this.candidats = data;
      }
    });
  }
  delete(candidatId) {
    console.log(this.candidatId);
    return this.candidatService.deleteCandidats(candidatId).subscribe(data => {alert('succes')});

  }



}


