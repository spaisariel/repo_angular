import { Component, OnInit } from '@angular/core';
import { Modelo } from 'src/app/models/modeloDeEjemplo';
import { PruebaHttpService } from 'src/app/prueba-http.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private pruebaHttpServ: PruebaHttpService ) { }
  modelo: Modelo[];
  ngOnInit(): void {
    this.traerInfoDesdeElServicio();
  }
  
  traerInfoDesdeElServicio(): void{
  this.pruebaHttpServ.getModelosDeEjemplo().subscribe(data => this.modelo = data);
  }

}
