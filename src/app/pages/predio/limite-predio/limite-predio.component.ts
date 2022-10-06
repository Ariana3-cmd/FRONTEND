import {
  Component,
  EventEmitter,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  Input,
} from '@angular/core';
import { LimitePredio } from 'src/app/modals/limitePredio';
import { FormService } from 'src/app/service/form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-limite-predio',
  templateUrl: './limite-predio.component.html',
  styleUrls: ['./limite-predio.component.scss'],
})
export class LimitePredioComponent implements OnInit {
  @Output() previusButton: EventEmitter<any> = new EventEmitter();
  limitePredio: LimitePredio = new LimitePredio();
  @ViewChild('clasificacion') clasificacion: ElementRef | any;
  @ViewChild('area') area: ElementRef | any;
  @Input() entradaDatos: any;
  datafinal: any;
  constructor(private formService: FormService) {}

  ngOnInit(): void {}

  previus() {
    this.previusButton.emit(false);
  }

  selectClasificacion() {
    const select = this.clasificacion.nativeElement;
    const selectedOption = select.options[select.selectedIndex].value;
    return selectedOption;
  }

  selectarea() {
    const select = this.area.nativeElement;
    const selectedOption = select.options[select.selectedIndex].value;
    return selectedOption;
  }

  enviarDatos() {
    this.limitePredio.P_Frontis = this.selectarea();
    this.limitePredio.P_Clacificacion = this.selectClasificacion();
    const objectContribuyente = Object.values(this.limitePredio);
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
        if (contador == 8) {
          // console.log(Object.assign(this.entradaDatos, this.limitePredio));
          this.datafinal = Object.assign(this.entradaDatos, this.limitePredio);
          Swal.fire({
            title: '¿Desea Agregar este Predio?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
          }).then((result) => {
            if (result.isConfirmed) {
              this.formService
                .createContribuyente(this.datafinal)
                .subscribe((message) => {
                  console.log(message);
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Agregado Correctamente',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                });
            }
          });
        }
      }
    }
  }
}
