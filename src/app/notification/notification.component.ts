import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  message: string;
  constructor() { }

  ngOnInit() {
    this.message = localStorage.getItem('message') ? localStorage.getItem('message') : null;
  }

}
