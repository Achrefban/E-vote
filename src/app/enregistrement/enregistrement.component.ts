import { Component, OnInit } from '@angular/core';
import { ElecteurService } from '../shared/services/electeur.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.scss'],
  providers: [ElecteurService]
})
export class EnregistrementComponent implements OnInit {

  electeur: any = {};
  error: string;

  constructor(private router: Router, private electeurService: ElecteurService) { }

  ngOnInit() {
  }

  ajout() {
    console.log(this.electeur)
    this.electeurService.newElecteur(this.electeur).subscribe(data => {
      console.log(data)
      if (!data.errors) {
        this.router.navigate(['/empreinte']);
      } else {
        this.error = 'Votre formulaire est incomplet ou comporte des erreurs !';
        console.log('err test electeur');
      }
    });
  }
}
