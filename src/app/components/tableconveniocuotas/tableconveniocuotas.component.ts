import { Component, OnInit } from '@angular/core';
import { Cuota } from '@models/modeloDeEjemplo';

const ELEMENT_DATA: Cuota[] = [
  {
    numero: '1',
    monto: '$ 12.020',
    vencimiento: '20/01/2021'  
  },{
    numero: '2',
    monto: '$ 12.020',
    vencimiento: '20/02/2021'  
  },{
    numero: '3',
    monto: '$ 12.020',
    vencimiento: '20/03/2021'  
  }

];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tableconveniocuotas',
  templateUrl: './tableconveniocuotas.component.html',
  styleUrls: ['./tableconveniocuotas.component.css']
})
export class TableconveniocuotasComponent{
 
    displayedColumns: string[] = ['Cuota', 'Monto de cuota', 'Vencimiento'];
  dataSource = ELEMENT_DATA;

  
}
