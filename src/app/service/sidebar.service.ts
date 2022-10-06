import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Predio',
      icono: 'fa fa-universal-access',
      url: '/menu/predio',
    },
    {
      titulo: 'Ver',
      icono: 'fa fa-file-text',
      url: '/menu/ver',
    },
  ];

  private urlVer: string = 'http://localhost:3000/api/auth/contribuyente';

  constructor(private http: HttpClient) {}

  public getContribuyentePredio(): Observable<any> {
    return this.http.get(this.urlVer);
  }
}
