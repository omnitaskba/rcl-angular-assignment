import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.scss']
})
export class SimpleLayoutComponent implements OnInit {

  menuHidden = false;
  innerWidth: any;


  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 768) {
      this.menuHidden = true;
    }
  }

  onToggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const prevInnerWidth = this.innerWidth;
    this.innerWidth = window.innerWidth;

    if (this.innerWidth != prevInnerWidth) {

      if (prevInnerWidth < 768 && this.innerWidth >= 768) {
        this.menuHidden = false;
      } else if (prevInnerWidth >= 768 && this.innerWidth < 768) {
        this.menuHidden = true;
      }
    }
  }
}
