import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdentityServiceService {

  constructor(private http: HttpClient) {
  }

  getElecteur(pieceId): any {
    return this.http.get('http://localhost:3000/electeurs/pieceId/' + pieceId);
    console.log('faux')
  }
}
