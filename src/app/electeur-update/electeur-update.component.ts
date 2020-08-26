import { Component, OnInit } from '@angular/core';
import { ElecteurService } from '../shared/services/electeur.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-electeur-update',
  templateUrl: './electeur-update.component.html',
  styleUrls: ['./electeur-update.component.scss'],
  providers: [ElecteurService]
})
export class ElecteurUpdateComponent implements OnInit {

  electeur: any = {};
  electeurId: any;
  error: any;
  success: any;
  constructor(private router: Router, private electeurService: ElecteurService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.electeurId = this.route.snapshot.paramMap.get('id');

    this.electeurService.getElecteurById(this.electeurId).subscribe(data => {
      if (!data.errors) {
        this.electeur = data;
      } else {
        this.error = 'une erreur s est produite !';
      }
    });
  }

  update() {
    this.success = '';
    this.error = '';
    this.electeurService.updateElecteur(this.electeurId, this.electeur).subscribe(data => {
      if (!data.errors) {
        localStorage.setItem('electeur', JSON.stringify(data));
        this.success = 'Les modifications ont été enregistrées avec succès.';
        this.router.navigate(['electeurs']);
      } else {
        this.error = 'une erreur s est produite veuillez vérifier vos informations !';
      }
    });
  }

}
