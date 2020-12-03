import { Component, OnInit } from '@angular/core';
import { Cupon, EntidadAcreedora } from '@models/modeloDeEjemplo';

@Component({
  selector: 'app-cuponescontainer',
  templateUrl: './cuponescontainer.component.html',
  styleUrls: ['./cuponescontainer.component.css']
})
export class CuponescontainerComponent implements OnInit {

 
  //constructor(private pruebaHttpServ: PruebaHttpService ) { }
  //modelo: Modelo[];
  cupones:Cupon[];



  ngOnInit(): void {
   // this.traerInfoDesdeElServicio();
    this.cupones = [
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
  }

  // traerInfoDesdeElServicio(): void{
  // this.pruebaHttpServ.getModelosDeEjemplo().subscribe(data => this.modelo = data);
  // }

}
