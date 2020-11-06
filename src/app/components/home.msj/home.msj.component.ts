import { Component, OnInit } from '@angular/core';
import { Modelo } from 'src/app/models/modeloDeEjemplo';
import { PruebaHttpService } from 'src/app/prueba-http.service';
@Component({
  selector: 'app-home-msj',
  templateUrl: './home.msj.component.html',
  styleUrls: ['./home.msj.component.css']
})
export class HomeMsjComponent implements OnInit {

  constructor(private pruebaHttpServ: PruebaHttpService ) { }
  modelos: Modelo[];
  

  ngOnInit(): void {
    this.traerInfoDesdeElServicio();
  }

  traerInfoDesdeElServicio(): void{
  this.pruebaHttpServ.getModelosDeEjemplo().subscribe(data => this.modelos = data);

  }

}
