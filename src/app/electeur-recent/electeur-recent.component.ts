import { Component, OnInit } from '@angular/core';
import { ElecteurService } from '../shared/services/electeur.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-electeur-recent',
  templateUrl: './electeur-recent.component.html',
  styleUrls: ['./electeur-recent.component.scss'],
  providers: [ElecteurService],
})
export class ElecteurRecentComponent implements OnInit {
  electeur: any = {};
  electeurId: any;
  error: any;

  constructor(private router: Router, private electeurService: ElecteurService) { }

  ngOnInit() {
    this.getRecent();
  }
  getRecent() {
    this.electeurService.getLatest().subscribe(data => {
      if (data) {
        this.electeur = data;
      }
    });
  }

  delete(electeurId) {
    console.log(this.electeurId);
    return this.electeurService.deleteElecteur(electeurId).subscribe(data => {alert('succes')});

  }

}
