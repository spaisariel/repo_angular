import { Component, OnInit } from '@angular/core';
import { Cupon } from '@models/modeloDeEjemplo';
const ELEMENT_DATA: Cupon[] = [
  {
    imagen: '/assets/pagofacil.png',
    titulo: 'Pago sin factura',
    descripcion: 'CODIGO PERSONAL xxxxxxx EMPRESA xxxxxxxx'  
  },{
    imagen: '/assets/rapipago.png',
    titulo: 'Pago sin factura',
    descripcion: 'CODIGO PERSONAL xxxxxxx EMPRESA xxxxxxxx'  
  },{
    imagen:'/assets/transferencia.png' ,
    titulo: 'Transferencia/Deposito',
    descripcion: 'CBU xxxxxx-xxxxxx CC xxxx/xxx-xxx'  
  }

];
@Component({
  selector: 'app-tableconveniocupones',
  templateUrl: './tableconveniocupones.component.html',
  styleUrls: ['./tableconveniocupones.component.css']
})
export class TableconveniocuponesComponent {
  displayedColumns: string[] = ['Imagen', 'Descripcion'];
  dataSource = ELEMENT_DATA;


}
