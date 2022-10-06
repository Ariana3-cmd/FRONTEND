import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { contribuyente } from 'src/app/modals/contribuyente';
import { FormService } from 'src/app/service/form.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-datos-contribuyente',
  templateUrl: './datos-contribuyente.component.html',
  styleUrls: ['./datos-contribuyente.component.scss'],
})
export class DatosContribuyenteComponent implements OnInit {
  @Output() buttonNextTab: EventEmitter<any> = new EventEmitter();
  @Output() datos: EventEmitter<any> = new EventEmitter();
  @ViewChild('s_persona') sPersona: ElementRef | any;
  @ViewChild('t_documento') tDocumento: ElementRef | any;
  @ViewChild('input_d') element: ElementRef | any;
  @ViewChild('distrito') distrito: ElementRef | any;
  //* Estructura de datos de one view;

  contribuyente: contribuyente = new contribuyente();
  selectDistritoArray: any;
  selectDocumentoArray: any;

  constructor(private serviceForm: FormService) {}

  ngOnInit(): void {
    this.getSelectDistrito();
    this.getSelectDocumento();
  }

  selectPersona(): string {
    const select = this.sPersona.nativeElement;
    const selectedOption = select.options[select.selectedIndex].value;
    return selectedOption;
  }

  selectDocumento(): string {
    const select = this.tDocumento.nativeElement;
    const selectedOption = select.options[select.selectedIndex].value;
    return selectedOption;
  }
  selectDistrito(): string {
    const select = this.distrito.nativeElement;
    const selectedIndex = select.options[select.selectedIndex].value;
    return selectedIndex;
  }

  nextTab() {
    this.contribuyente.P_TipoContribuyente = this.selectPersona();
    this.contribuyente.P_IdTipoDocumento = parseInt(this.selectDocumento());
    this.contribuyente.P_IdDistrito = parseInt(this.selectDistrito());
    this.contribuyente.P_IdTipoDocumento = parseInt(this.selectDocumento());
    this.contribuyente.P_Documento = this.contribuyente.P_Documento?.toString();
    this.contribuyente.P_Tipovia = this.contribuyente.P_Tipovia?.toString();
    //console.log(this.contribuyente);
    // console.log(this.contribuyente.P_Documento);
    const objectContribuyente = Object.values(this.contribuyente);
    let contador = 0;
    for (const iterador of objectContribuyente) {
      if (iterador == '' || iterador == undefined) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingrese todos los campos!',
          showConfirmButton: false,
          timer: 1000,
        });
        break;
      } else {
        contador++;
        if (contador == 14) {
          this.buttonNextTab.emit(true);
          this.datos.emit(this.contribuyente);
        }
      }
    }
  }

  getSelectDistrito() {
    this.serviceForm.getSelectDistrito().subscribe((data) => {
      this.selectDistritoArray = data;
      console.log(this.selectDistritoArray);
    });
  }

  getSelectDocumento() {
    this.serviceForm.getSelectTpoDocumento().subscribe((data) => {
      this.selectDocumentoArray = data;
      console.log(this.selectDocumentoArray);
    });
  }
}
