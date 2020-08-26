import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ElectionTypeService {

  constructor(private http: HttpClient) { }

  getAllElectionType(): any {
    return this.http.get('http://localhost:3000/electionType');
  }

  deleteElectionType(electionTypeId): any {
    return this.http.delete('http://localhost:3000/electionType/' + electionTypeId);
  }

  getElectionTypeById(electionTypeId): any {
    return this.http.get('http://localhost:3000/electionType/' + electionTypeId);
  }

  newElectionType(electionType): any {
    return this.http.post('http://localhost:3000/electionType', electionType);
  }

  updateElectionType(electionTypeId, electionType): any {
    return this.http.put('http://localhost:3000/electionType/' + electionTypeId, electionType);
  }

}
