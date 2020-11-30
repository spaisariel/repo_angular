import { Component, OnInit } from '@angular/core';
import { Deuda, EntidadAcreedora } from '@models/modeloDeEjemplo';

@Component({
  selector: 'app-acordiondeuda',
  templateUrl: './acordiondeuda.component.html',
  styleUrls: ['./acordiondeuda.component.css']
})

export class AcordiondeudaComponent implements OnInit {

  panelOpenState = false;
  entidad: EntidadAcreedora;
  
  constructor() {
  }
  ngOnInit(): void { }

}

