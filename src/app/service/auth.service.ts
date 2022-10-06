import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private urlAuth: string = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  public SearchPassword(username: string, password: string): Observable<any> {
    return this.http.post(this.urlAuth, {
      username: username,
      password: password,
    });
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
