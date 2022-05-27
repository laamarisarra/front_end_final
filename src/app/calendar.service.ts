import { Injectable } from '@angular/core';
import { Calendar } from './calendar';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private baseURL = "http://127.0.0.1:8000/api/agendas";

  constructor(private httpClient: HttpClient) { }

  getCalendarsList(): Observable<Calendar[]> {
    return this.httpClient.get<Calendar[]>(`${this.baseURL}`);
    
  }
  
  createCalendar(calendar: Calendar): Observable<Object>
   {
     return this.httpClient.post(`http://127.0.0.1:8000/api/ajouter`, calendar);
   }
   getCalendarById(id:number): Observable<Calendar>{
    return this.httpClient.get<Calendar>(`http://127.0.0.1:8000/api/agendaedit/${id}`); 
  }


  updateCalendar(id: number, calendar: Calendar):Observable<Object>
  {
    return this.httpClient.patch(`http://127.0.0.1:8000/api/agendaupdate/${id}`, calendar);
  }
  deleteCalendar(id: number): Observable<Object>
   {
  return this.httpClient.delete(`http://127.0.0.1:8000/api/agendadelete/${id}`); 
   }
}
