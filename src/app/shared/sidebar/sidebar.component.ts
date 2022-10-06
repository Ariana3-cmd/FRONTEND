import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { SidebarService } from '../../service/sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  @ViewChild('aside') aside: ElementRef | any;
  @ViewChild('buttonBotton') buttonBotton: ElementRef | any;
  private button!: boolean;

  constructor(
    private sidebarService: SidebarService,
    private ren2: Renderer2,
    private route: Router,
    private cookieService: CookieService
  ) {
    // console.log(this.buttonSide);
  }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.menu;
    // console.log(this.menuItems);
  }

  @Input() set buttonSide(value: boolean) {
    this.button = value;
    if (this.button == true) {
      this.aside.nativeElement.style.width = '80px';
      this.buttonBotton.nativeElement.style.width = '75px';
      // console.log(this.aside);
    } else {
      if (this.button == false) {
        // console.log(this.aside);
        this.ren2.removeAttribute(this.aside.nativeElement, 'style');
        this.ren2.removeAttribute(this.buttonBotton.nativeElement, 'style');
      }
    }
  }

  logout(): void {
    Swal.fire({
      title: '¿Desea Terminar este Sesion?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed == true) {
        Swal.fire('¡Salio  Correctamente!', '', 'success');
        this.cookieService.deleteAll();
        this.route.navigate(['/auth/login']);
      }
    });
  }
}
