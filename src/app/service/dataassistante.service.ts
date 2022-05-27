import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataassistanteService {

  constructor(private httpClient:HttpClient) { }
  getAssistantesData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/medassistante');
  }
  
  insertAssistantesData(data:any){
     return this.httpClient.post('http://127.0.0.1:8000/api/medassistore', data);

  }
  deleteAssistantesData(id:any) {
     return this.httpClient.delete('http://127.0.0.1:8000/api/medassidelete/'+id );
  }
  getPatientById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/medassishow/'+id );

  }
  updatetData(id:any ,data:any){
    return this.httpClient.patch('http://127.0.0.1:8000/api/medassiupdate/'+id, data);

 }
}

