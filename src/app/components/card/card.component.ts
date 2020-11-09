import { Component, OnInit } from '@angular/core';
import { Modelo, EntidadAcreedora } from 'src/app/models/modeloDeEjemplo';
import { PruebaHttpService } from 'src/app/prueba-http.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private pruebaHttpServ: PruebaHttpService ) { }
  modelo: Modelo[];
  entidadesAcreedoras: EntidadAcreedora[];


  ngOnInit(): void {
    this.traerInfoDesdeElServicio();
    this.entidadesAcreedoras = [
    {nombre: 'Creditia',
     descripcion: '01/04/2020 - $5500'},
    {nombre: 'Galicia',
    descripcion: '12/08/2019 - $8000'},
    {nombre: 'Credipaz',
    descripcion: '22/08/2018 - $8000'},
    {nombre: 'Argenpesos',
    descripcion: '12/12/2019 - $5400'},
  ];
  }

  traerInfoDesdeElServicio(): void{
  this.pruebaHttpServ.getModelosDeEjemplo().subscribe(data => this.modelo = data);
  }

}
