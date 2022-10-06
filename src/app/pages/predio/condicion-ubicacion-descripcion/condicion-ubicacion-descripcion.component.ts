import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CondicionDescripcion } from 'src/app/modals/condicionDescripcion';
import { FormService } from 'src/app/service/form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-condicion-ubicacion-descripcion',
  templateUrl: './condicion-ubicacion-descripcion.component.html',
  styleUrls: ['./condicion-ubicacion-descripcion.component.scss'],
})
export class CondicionUbicacionDescripcionComponent implements OnInit {
  @Output() buttonNext: EventEmitter<any> = new EventEmitter();
  @Output() buttonPrevius: EventEmitter<any> = new EventEmitter();
  @Output() exitData: EventEmitter<any> = new EventEmitter();
  @Input() entradaDatos: any;

  condicionDescripcion: CondicionDescripcion = new CondicionDescripcion();

  @ViewChild('condicion') condicion: ElementRef | any;
  @ViewChild('tipoAgrupacion') tagrupacion: ElementRef | any;
  @ViewChild('tipoVia') tipoVia: ElementRef | any;
  dataEnvioMain: {} = {};
  selectTipoViaArray: any;

  constructor(private serviceForm: FormService) {}

  ngOnInit(): void {
    this.getSelectTipoVia();
  }

  previus() {
    this.buttonPrevius.emit(false);
  }

  next() {
    this.condicionDescripcion.P_IdTipoVia = parseInt(this.getValTipoVia());
    this.condicionDescripcion.P_InefactoPensionista = this.getValCondicion();
    this.condicionDescripcion.P_TipoAgrupacion = this.getValTipoVia();
    this.condicionDescripcion.P_Km = this.condicionDescripcion.P_Km?.toString();
    this.condicionDescripcion.P_Lote =
      this.condicionDescripcion.P_Lote?.toString();
    this.condicionDescripcion.P_Mz = this.condicionDescripcion.P_Mz?.toString();
    this.condicionDescripcion.P_Numero =
      this.condicionDescripcion.P_Numero?.toString();
    this.condicionDescripcion.P_NumeroPredio =
      this.condicionDescripcion.P_NumeroPredio?.toString();
    this.condicionDescripcion.P_NumeroVia =
      this.condicionDescripcion.P_NumeroVia?.toString();
    this.condicionDescripcion.P_PorcentajePropiedad =
      this.condicionDescripcion.P_PorcentajePropiedad?.toString();
    // console.log(this.condicionDescripcion);
    const objectContribuyente = Object.values(this.condicionDescripcion);
    //   console.log(objectContribuyente.length);
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
        if (contador == 31) {
          this.buttonNext.emit(true);
          this.exitData.emit(
            Object.assign(this.entradaDatos, this.condicionDescripcion)
          );
        }
      }
    }
  }

  getValCondicion(): string {
    const select = this.condicion.nativeElement;
    const selectedOption = select.options[select.selectedIndex].value;
    return selectedOption;
  }

  getValTipoAgrupacion(): string {
    const select = this.tagrupacion.nativeElement;
    const selectedIndex = select.options[select.selectedIndex].value;
    return selectedIndex;
  }

  getValTipoVia(): string {
    const select = this.tipoVia.nativeElement;
    const selectedIndex = select.options[select.selectedIndex].value;
    console.log(selectedIndex);
    return selectedIndex;
  }

  // TODO: Cargar los datos del select

  getSelectTipoVia() {
    this.serviceForm.getSelectTipoVia().subscribe((data) => {
      this.selectTipoViaArray = data;
      console.log(this.selectTipoViaArray);
    });
  }
}
