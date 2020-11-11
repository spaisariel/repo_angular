<<<<<<< HEAD
import { Component, Input} from '@angular/core';
import { EntidadAcreedora } from 'src/app/models/modeloDeEjemplo';
=======
import { Component, Input, OnInit } from '@angular/core';
import { EntidadAcreedora } from '@models/modeloDeEjemplo';
>>>>>>> 65ba2e671ffe0d7ec6e83bfbedb28d9642ef891a

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
<<<<<<< HEAD
  
  @Input() card:EntidadAcreedora;
  
=======

  @Input() card: EntidadAcreedora;

>>>>>>> 65ba2e671ffe0d7ec6e83bfbedb28d9642ef891a

}
