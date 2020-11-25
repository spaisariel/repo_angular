import { Component, OnInit } from '@angular/core';
import { HeaderDosComponentes } from '@models/componentesGenericos'

@Component({
  selector: 'app-deudaentidad',
  templateUrl: './deudaentidad.component.html',
  styleUrls: ['./deudaentidad.component.css']
})
export class DeudaentidadComponent implements OnInit {

  constructor() { }

  dato: HeaderDosComponentes;
  ngOnInit(): void {
    this.dato = {
      title : 'Productos a abonar',
      subtitle : 'BBVA'
    };
  }


}
