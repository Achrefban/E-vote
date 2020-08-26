import { Component, OnInit } from '@angular/core';
import { ElecteurService } from '../shared/services/electeur.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-electeurs',
  templateUrl: './electeurs.component.html',
  styleUrls: ['./electeurs.component.scss'],
  providers: [ElecteurService]
})
export class ElecteursComponent implements OnInit {
  electeurs: any = [];
  showModal: any;
  electeurId: any;
  pageOfItems: Array<any>;
  searchText: any;

  constructor(private router: Router, private electeurService: ElecteurService) { }

  ngOnInit() {
    this.getAllElecteurs();
  }

  getAllElecteurs() {
    this.electeurService.getAllElecteurs().subscribe(data => {
      if (data) {
        this.electeurs = data;
      }
    });
  }

  delete(electeurId) {
    console.log(this.electeurId);
    return this.electeurService.deleteElecteur(electeurId).subscribe(data => {alert('succes')});

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
