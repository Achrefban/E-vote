import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CandidatsService {

    constructor(private http: HttpClient) { }

    // candidats
  getAllCandidats(): any {
    return this.http.get('http://localhost:3000/candidats');
  }

  deleteCandidats(candidatId): any {
    return this.http.delete('http://localhost:3000/candidat/' + candidatId);
  }

  getCandidatById(candidatId): any {
    return this.http.get('http://localhost:3000/candidat/' + candidatId);
  }

  newCandidat(candidat): any {
    return this.http.post('http://localhost:3000/candidats', candidat);
  }

  updateCandidat(candidatId, candidat): any {
    return this.http.put('http://localhost:3000/candidat/' + candidatId, candidat);
  }

  getCurrentCandidatId(): any {
    const candidat = JSON.parse(localStorage.getItem('candidat'));
    return candidat._id;
  }


}
