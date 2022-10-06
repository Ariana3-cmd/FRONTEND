import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isloading = true;
  user: string = '';
  pass: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isloading = false;
    }, 1500);
  }

  login() {
    console.log(this.user + '  ' + this.pass);
    if (this.user != '' && this.pass != '') {
      this.authService
        .SearchPassword(this.user, this.pass)
        .subscribe((data: any) => {
          this.cookieService.set('token', data.accessToken);
          console.log(this.obtenerDatosToken(data.accessToken));
          this.cookieService.set(
            'id',
            this.obtenerDatosToken(data.accessToken).user.id
          );
          this.cookieService.set(
            'NombreCompleto',
            this.obtenerDatosToken(data.accessToken).user.nombre
          );
          this.cookieService.set(
            'Apellido',
            this.obtenerDatosToken(data.accessToken).user.apellidos
          );
          this.router.navigate(['/menu']);
        });
    } else {
    }
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      if (accessToken.length > 0) {
        return JSON.parse(atob(accessToken.split('.')[1]));
      }
    }
    return null;
  }
}
