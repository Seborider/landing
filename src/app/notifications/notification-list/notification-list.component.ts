import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Command, NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  messages!: Observable<Command[]>

  constructor(notificationsService: NotificationsService) { 
    this.messages = notificationsService.messagesOutput 
    
    setInterval(() => {
      notificationsService.addError("WORKING with ERROR")
    }, 1000)
  }

  ngOnInit(): void {
  }

}
