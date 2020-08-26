import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectionSessionService {

  constructor(private http: HttpClient) { }

  getAllElection(): any {
    return this.http.get('http://localhost:3000/elections');
  }

  deleteElection(electionId): any {
    return this.http.delete('http://localhost:3000/election/' + electionId);
  }

  getElectionById(electionId): any {
    return this.http.get('http://localhost:3000/election/' + electionId);
  }

  newElection(election): any {
    return this.http.post('http://localhost:3000/elections', election);
  }

  updateElection(electionId, election): any {
    return this.http.put('http://localhost:3000/election/' + electionId, election);
  }

  getElectionByEtat(etat): any {
    return  this.http.post('http://localhost:3000/election/active' , etat);
  }

}
