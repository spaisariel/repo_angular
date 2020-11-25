import { Component, OnInit } from '@angular/core';
import { HeaderDosComponentes } from '../../models/componentesGenericos';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {

  constructor() { }
header: HeaderDosComponentes;
  ngOnInit(): void {
    this.header = {
      title : 'Convenio Activo',
      subtitle : 'BBVA'
    };
  }

}
