import { Component, Input, OnInit } from '@angular/core';
import { EntidadAcreedora } from 'src/app/models/modeloDeEjemplo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() card:EntidadAcreedora;
  

}
