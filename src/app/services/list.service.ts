import { Injectable } from '@angular/core';
//import { INST } from 'src/app/mock-list';
import { Liste } from 'src/app/Liste';
import { Observable,of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListService {


 private apiUrl = 'http://localhost:3000/liste'

  constructor(private http:HttpClient) { }

  getList(): Observable <Liste[]> {
    

    return this.http.get<Liste[]>(this.apiUrl);
  }
 
   deleteListe(liste: Liste): Observable<Liste> {
     const url =`${this.apiUrl}/${liste.numero}`;
     return this.http.delete<Liste>(url);
   }
}
