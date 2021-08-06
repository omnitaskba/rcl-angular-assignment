import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleMenu = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onBtnMenuClicked() {
    this.toggleMenu.emit();
  }

  onBtnSearchClicked() {
    alert('Not Implemented')
  }
  
  onBtnMailClicked() {
    alert('Not Implemented')
  }
  
  onBtnNotificationClicked() {
    alert('Not Implemented')
  }
  

}
