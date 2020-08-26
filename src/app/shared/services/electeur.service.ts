import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ElecteurService {

    constructor(private http: HttpClient) { }

    // electeurs
  getAllElecteurs(): any {
    return this.http.get('http://localhost:3000/electeurs');
  }
  findBySexe(): any {
    return this.http.get('http://localhost:3000/count');
  }
  deleteElecteur(electeurId): any {
    return this.http.delete('http://localhost:3000/electeurs/' + electeurId);
  }

  getElecteurById(electeurId): any {
    return this.http.get('http://localhost:3000/electeurs/' + electeurId);
  }


  newElecteur(electeur): any {
    return this.http.post('http://localhost:3000/electeurs', electeur);
  }

  updateElecteur(electeurId, electeur): any {
    return this.http.put('http://localhost:3000/electeurs/' + electeurId, electeur);
  }

  getCurrenElecteurId(): any {
    const electeur = JSON.parse(localStorage.getItem('electeur'));
    return electeur._id;
  }

  getLatest(): any {
    return this.http.get('http://localhost:3000/latest');
  }


}
