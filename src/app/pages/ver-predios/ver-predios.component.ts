import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/service/form.service';
import { SidebarService } from 'src/app/service/sidebar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-predios',
  templateUrl: './ver-predios.component.html',
  styleUrls: ['./ver-predios.component.scss'],
})
export class VerPrediosComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'index',
    'codigo',
    'Nombre_Completo_razonsocial',
    'numeroDoc',
    'manzana_cat',
    'Accion',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  dataSource: any;
  data: any[] = [];
  mediaQueryList: any;
  constructor(
    private sidebar: SidebarService,
    private formService: FormService
  ) {}

  ngAfterViewInit() {
    this.getDataTable();
  }
  getDataTable() {
    this.sidebar.getContribuyentePredio().subscribe((item) => {
      let index = 1;
      for (const key of item) {
        key.index = index;
        index++;
      }
      this.data = item;
      console.log(this.data);
      this.dataSource = new MatTableDataSource<PeriodicElement>(item);
      this.dataSource.paginator = this.paginator;
    });
  }

  deletePredio(codigo: any) {
    //alert(codigo);
    Swal.fire({
      title: '¿Desea eliminar este Predio?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.formService.deleteContribuyente(codigo).subscribe((message) => {
          //  console.log(message);
          this.getDataTable();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Eliminado Correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
        });
      } else {
      }
    });
    //console.log(codigo);
  }

  updatePredio(codigo: any) {}

  viewPredio(codigo: any) {}
}

export interface PeriodicElement {
  codigo: string;
  Nombre_Completo_razonsocial: string;
  numeroDoc: string;
  manzana_cat: string;
}
