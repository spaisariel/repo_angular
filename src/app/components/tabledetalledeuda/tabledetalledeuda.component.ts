
import {Component} from '@angular/core';
import { Deuda} from '@models/modeloDeEjemplo';



const ELEMENT_DATA: Deuda[] = [
  {
    descripcion: 'Tarjeta de credito',
    monto: '$ 12.020',
    origen: 'BBVA',
    nroProducto: '0213498',
    situacion: 'SIN CONVENIO'
  }

 
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tabledetalledeuda',
  templateUrl: './tabledetalledeuda.component.html',
  styleUrls: ['./tabledetalledeuda.component.css']
})
export class TabledetalledeudaComponent {
  
  displayedColumns: string[] = ['Origen', 'N° Producto', 'Situacion'];
  dataSource = ELEMENT_DATA;
}


