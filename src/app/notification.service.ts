import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Notification } from './notification';
import { Observable, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseURL = "http://127.0.0.1:8000/api/notifications"

  constructor(private httpClient: HttpClient) { }

  getNotification():Observable<Notification[]> {
      return this.httpClient.get<Notification[]>(`${this.baseURL}`)
      
    }
      
      
   
    insertNotification(notification:Notification): Observable<Object>
    {
      return this.httpClient.post(`http://127.0.0.1:8000/api/notificationstore`, notification);
    }
  }

