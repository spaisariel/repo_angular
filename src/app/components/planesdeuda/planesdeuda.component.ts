import { Component, OnInit } from '@angular/core';
import { HeaderDosComponentes } from '../../models/componentesGenericos';

@Component({
  selector: 'app-planesdeuda',
  templateUrl: './planesdeuda.component.html',
  styleUrls: ['./planesdeuda.component.css']
})
export class PlanesdeudaComponent implements OnInit {

  constructor() { }
header: HeaderDosComponentes;
  ngOnInit(): void {
    this.header = {
      title : 'Planes disponibles',
      subtitle : 'BBVA'
    };
  }

}
