import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectAuthService {
  constructor(private http: HttpClient) { }

  getCin(): any {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
    const params = new HttpParams()
        .set('cin', 'cinsou.png');
    return this.http.get('http://localhost:5000/cin',{params, 'headers': headers});
  }

  getPasseport(): any {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
    const params = new HttpParams()
        .set('passeport', 'passSouha.png');
    return this.http.get('http://localhost:5000/passport',{params, 'headers': headers});
  }


}
