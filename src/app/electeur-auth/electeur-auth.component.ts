import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ElectAuthService} from '../shared/services/elect-auth.service';
import {IdentityServiceService} from '../shared/services/identity-service.service';


@Component({
  selector: 'app-electeur-auth',
  templateUrl: './electeur-auth.component.html',
  styleUrls: ['./electeur-auth.component.scss']
})
export class ElecteurAuthComponent implements OnInit {
  get loggedIn(): boolean {
    return this._loggedIn;
  }

  set loggedIn(value: boolean) {
    this._loggedIn = value;
  }

  constructor(private router: Router, private electAuthService: ElectAuthService, private identityService: IdentityServiceService) { }

  cin: any = [];
  passeport: any = [];
  pieceId: string;
  electeur: any [];
  formGroup: any;
  private _loggedIn = true;

  ngOnInit() {
    this.getCin();
  }
  getCin() {
    this.electAuthService.getCin().subscribe(data => {
      if (data) {
        this.cin = data;
        this.pieceId = this.cin.text;
      }
    });
  }

  getPasseport() {
    this.electAuthService.getPasseport().subscribe(data => {
      if (data) {
        this.passeport = data;
        this.pieceId = this.passeport.text;
      }
    });
  }
  getElecteur() {
    console.log(this.pieceId);
    this.identityService.getElecteur(this.pieceId).subscribe(data => {
      if (data) {
        this.electeur = data;
        console.log(this.electeur);
        this.router.navigate(['electeur/auth/fingerPrint']);
      }
    });
  }

  alert() {
    window.alert(this.pieceId);
  }
  logoutAndNavigate() {
    this._loggedIn = false;
    this.router.navigate(['auth/login']);
  }

}
