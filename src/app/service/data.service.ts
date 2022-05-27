import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/patients');
  }
  
  insertData(data:any){
     return this.httpClient.post('http://127.0.0.1:8000/api/patstore', data);

  }
  deleteData(id:any) {
     return this.httpClient.delete('http://127.0.0.1:8000/api/patdelete/'+id );
  }
  getPatientById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/patshow/'+id );

  }
  updateData(id:any ,data:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/patiupdate/'+id, data);

 }
}
