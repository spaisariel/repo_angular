import { Component, OnInit } from '@angular/core';
import { EntidadAcreedora, Modelo } from '@models/modeloDeEjemplo';
import { PruebaHttpService } from '@services/prueba-http.service';

@Component({
  selector: 'app-cardscontainer',
  templateUrl: './cardsContainer.component.html',
  styleUrls: ['./cardsContainer.component.css']
})
export class CardsContainerComponent  {

  //constructor(private pruebaHttpServ: PruebaHttpService ) { }
  //modelo: Modelo[];
  entidadesAcreedoras: EntidadAcreedora[];



  ngOnInit(): void {
   // this.traerInfoDesdeElServicio();
    this.entidadesAcreedoras = [
    {nombre: 'Creditia',
     descripcion: '01/04/2020 - $5500',deudas:[{
      descripcion:'Tarjeta de credito',
      monto:'$ 12.020',
      origen:'BBVA',
      nroProducto:'0213498',
      situacion:'SIN CONVENIO'},{descripcion:'Credito Personal',
      monto:'$ 22.020',
      origen:'BBVA',
      nroProducto:'0211238',
      situacion:'SIN CONVENIO'}
     ]},
    {nombre: 'Galicia',
    descripcion: '12/08/2019 - $8000',deudas:[{
      descripcion:'Tarjeta de credito',
      monto:'$ 12.020',
      origen:'BBVA',
      nroProducto:'0213498',
      situacion:'SIN CONVENIO'},{descripcion:'Credito Personal',
      monto:'$ 22.020',
      origen:'BBVA',
      nroProducto:'0211238',
      situacion:'SIN CONVENIO'},{
        descripcion:'Tarjeta de credito',
        monto:'$ 12.020',
        origen:'BBVA',
        nroProducto:'0213498',
        situacion:'SIN CONVENIO'},{descripcion:'Credito Personal',
        monto:'$ 22.020',
        origen:'BBVA',
        nroProducto:'0211238',
        situacion:'SIN CONVENIO'}
     ]},
    {nombre: 'Credipaz',
    descripcion: '22/08/2018 - $8000',deudas:[{
      descripcion:'Tarjeta de credito',
      monto:'$ 12.020',
      origen:'BBVA',
      nroProducto:'0213498',
      situacion:'SIN CONVENIO'}
     ]},
    {nombre: 'Argenpesos',
    descripcion: '12/12/2019 - $5400',deudas:[{
      descripcion:'Tarjeta de credito',
      monto:'$ 12.020',
      origen:'BBVA',
      nroProducto:'0213498',
      situacion:'SIN CONVENIO'},{descripcion:'Credito Personal',
      monto:'$ 22.020',
      origen:'BBVA',
      nroProducto:'0211238',
      situacion:'SIN CONVENIO'}
     ]},
  ];
  }

  // traerInfoDesdeElServicio(): void{
  // this.pruebaHttpServ.getModelosDeEjemplo().subscribe(data => this.modelo = data);
  // }

}
