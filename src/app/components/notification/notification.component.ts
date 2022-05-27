import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/notification';
import { NotificationService } from 'src/app/notification.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
notifications:any;
notification = new Notification ();
  constructor(private dataService:NotificationService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.getNotificationData();
  }

  getNotificationData(){
    this.dataService.getNotification().subscribe(res => {
      this.notifications = res;
      
    });
  }
  insertNotification(){
    this.dataService.insertNotification(this.notification).subscribe(res =>{
      this.getNotificationData();
      this.toast.success({detail:"Success Message",summary:"notification has been added",duration:5000})
    });
}
}
