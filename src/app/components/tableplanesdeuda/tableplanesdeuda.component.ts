import { Component, OnInit } from '@angular/core';
import { Plan } from '@models/modeloDeEjemplo';



const ELEMENT_DATA: Plan[] = [
  {cuotas: '1', monto: '$46.315',eleccion: false},{cuotas: '3', monto: '$25.315',eleccion: false},{cuotas: '6', monto: '$16.315',eleccion: false},

 
];

/**
 * @title Basic use of `<table mat-table>`
 */


@Component({
  selector: 'app-tableplanesdeuda',
  templateUrl: './tableplanesdeuda.component.html',
  styleUrls: ['./tableplanesdeuda.component.css']
})
export class TableplanesdeudaComponent implements OnInit {
 
  displayedColumns: string[] = ['Cuotas', 'Monto', 'Eleccion'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
