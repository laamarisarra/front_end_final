import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/notification';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-notifpatient',
  templateUrl: './notifpatient.component.html',
  styleUrls: ['./notifpatient.component.css']
})
export class NotifpatientComponent implements OnInit {
  notifications:any;
  notification = new Notification ();
  constructor(private dataService:NotificationService,) { }

  ngOnInit(): void {
    this.getNotificationData();
  }
  getNotificationData(){
    this.dataService.getNotification().subscribe(res => {
      this.notifications = res;
      
    });
}
}
