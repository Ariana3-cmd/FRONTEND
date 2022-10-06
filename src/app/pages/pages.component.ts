import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  buttonSidebar!: boolean;
  marginLeft: string = '80px';
  @ViewChild('container') container: ElementRef | any;
  constructor() {}

  ngOnInit(): void {}

  recibirAction(action: any) {
    // alert(action);
    if (action == true) {
      this.container.nativeElement.style.marginLeft = this.marginLeft;
      this.buttonSidebar = action;
    } else {
      this.container.nativeElement.removeAttribute('style');
      this.buttonSidebar = action;
    }
  }
}
