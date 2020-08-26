import { Component, OnInit } from '@angular/core';
import { ElecteurService } from '../shared/services/electeur.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-electeurs-stats',
  templateUrl: './electeurs-stats.component.html',
  styleUrls: ['./electeurs-stats.component.scss'],
  providers: [ElecteurService]
})
export class ElecteursStatsComponent implements OnInit {
  electeurs: any = [];
  femme: any = [];
  homme: any;
  
  constructor(private router: Router, private electeurService: ElecteurService) { }

  ngOnInit() {
    this.getAllElecteurs();
    //this.getRowsValue('homme');
    //this.getRowsValue('femme');
    this.getHomme();
  }
 
  public pieChartLabels = ['Homme', 'Femme',];
  public pieChartData = [150,2000];
  public pieChartType = 'pie';

 /**public getRowsValue(sexe) {
    if (sexe === null) {
      return this.electeurs.length;
    } else {
      return this.electeurs.filter(i => (i.state == sexe)).length;
    }
  }**/

 
  getHomme() {
    this.electeurService.findBySexe().subscribe(data => {
      if (data) {
        this.homme = data;
      }
    });
  }



  getAllElecteurs() {
    this.electeurService.getAllElecteurs().subscribe(data => {
      if (data) {
        this.electeurs = data;
      }
    });
  }

}
