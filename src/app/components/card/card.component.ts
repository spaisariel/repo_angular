import { Component, Input, OnInit } from '@angular/core';
import { EntidadAcreedora } from '@models/modeloDeEjemplo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input() card: EntidadAcreedora;


}
