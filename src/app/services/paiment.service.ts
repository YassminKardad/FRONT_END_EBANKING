import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Facture } from '../models/facture.model';

const baseUrl = 'http://localhost:8189/api/client';

@Injectable({
  providedIn: 'root'
})
export class PaimentService {
  private _facture: Facture = new Facture;

  get facture(){
    return this._facture ;
  }
  set facture(value:Facture){
    this._facture=value;
  }

  constructor(private http: HttpClient) { }

  get(factId: any): Observable<any> {
    return this.http.get(`${baseUrl+"/checkSolde/2"}/${factId}`);
  }
  validPay(factId: any,data:any):Observable<any>{
     return this.http.post(`${baseUrl+"/validPay/2"}/${factId}`,data);
     
  }

}
