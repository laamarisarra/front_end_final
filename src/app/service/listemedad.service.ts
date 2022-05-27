
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../patient';
@Injectable({
  providedIn: 'root'
})
export class ListemedadService {
  private baseURL = "http://127.0.0.1:8000/api/users";

  constructor(private httpClient :HttpClient ) { }

  getmedadData(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
    
  }
  createmedad(patient: Patient): Observable<Object>
  {
    return this.httpClient.post(`http://127.0.0.1:8000/api/store`, patient);
  }
  deletemedad(id: Patient): Observable<Object>
  {
 return this.httpClient.delete(`http://127.0.0.1:8000/api/delete/${id}`); 
  }
   
    

  

}


