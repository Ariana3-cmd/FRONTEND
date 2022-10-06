import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  URL: string = 'http://localhost:3000/api/auth/distrito';
  URLTIPOVIA: string = 'http://localhost:3000/api/auth/tipovia';
  URLCONTRIBUYENTE: string = 'http://localhost:3000/api/auth/contribuyente';
  URLTIPODOCUMENTO: string = 'http://localhost:3000/api/auth/documento';
  constructor(private http: HttpClient) {}

  public getSelectDistrito(): Observable<any> {
    return this.http.get(this.URL);
  }

  public getSelectTipoVia(): Observable<any> {
    return this.http.get(this.URLTIPOVIA);
  }

  public getSelectTpoDocumento(): Observable<any> {
    return this.http.get(this.URLTIPODOCUMENTO);
  }

  public createContribuyente(body: any): Observable<any> {
    return this.http.post(this.URLCONTRIBUYENTE, body);
  }

  public deleteContribuyente(codigo: any): Observable<any> {
    //alert(codigo);
    return this.http.put(this.URLCONTRIBUYENTE, { codigo });
  }
}
