import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  marginLeft: string = '80px';
  @Output() buttonSidebarAction: EventEmitter<any> = new EventEmitter();
  buttonAction: boolean = false;
  @ViewChild('header') header: ElementRef | any;
  nombreCompleto: string = '';

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.nombreCompleto = `${this.cookieService.get(
      'NombreCompleto'
    )} ${this.cookieService.get('Apellido')}`;
    console.log(this.nombreCompleto);
  }

  btnAction() {
    if (this.buttonAction == false) {
      // alert(this.buttonAction);
      this.buttonAction = true;
      this.buttonSidebarAction.emit(this.buttonAction);
      this.header.nativeElement.style.marginLeft = this.marginLeft;
    } else {
      // alert(this.buttonAction);
      this.buttonAction = false;
      this.buttonSidebarAction.emit(this.buttonAction);
      this.header.nativeElement.removeAttribute('style');
    }
  }
}
