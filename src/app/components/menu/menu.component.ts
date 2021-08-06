import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onUserInfoClicked() {
    alert('Not Implemented')
  }

  onReportsClicked() {
    alert('Not Implemented')
  }

  onNotificationsClicked() {
    alert('Not Implemented')
  }

  onArchivedClicked() {
    alert('Not Implemented')
  }
}
