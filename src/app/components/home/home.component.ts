import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 cargando=false;

  ngOnInit(): void {
   //this.cargando=true;
  }
/*
   ngAfterViewInit(){
     this.cargando=true;
   }
*/
}
