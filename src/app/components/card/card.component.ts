import { Component, Input} from '@angular/core';
import { EntidadAcreedora } from 'src/app/models/modeloDeEjemplo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  
  @Input() card:EntidadAcreedora;
  

}
