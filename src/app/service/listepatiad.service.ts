import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../patient';
@Injectable({
  providedIn: 'root'
})
export class ListepatiadService {
  private baseURL = "http://127.0.0.1:8000/api/patients";
  constructor(private httpClient:HttpClient) { }


  getpatiadData(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
    
  }
  createpatiad(patient: Patient): Observable<Object>
  {
    return this.httpClient.post(`http://127.0.0.1:8000/api/patstore`, patient);
  }
  deletepatiad(id: Patient): Observable<Object>
  {
 return this.httpClient.delete(`http://127.0.0.1:8000/api/patdelete/${id}`); 
  }
}
