import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../patient';
@Injectable({
  providedIn: 'root'
})
export class ListeassistadService {
  private baseURL = "http://127.0.0.1:8000/api/assistante";

  constructor(private httpClient: HttpClient) { }

  getassistanteData(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
    
  }
  createAssistad(patient: Patient): Observable<Object>
  {
    return this.httpClient.post(`http://127.0.0.1:8000/api/assistore`, patient);
  }
  deleteAssistad (id: number): Observable<Object>
  {
 return this.httpClient.delete(`http://127.0.0.1:8000/api/assidelete/${id}`); 
  }
   
} 

