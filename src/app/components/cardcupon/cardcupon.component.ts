import { Component, Input } from '@angular/core';
import { Cupon, EntidadAcreedora } from '@models/modeloDeEjemplo';

@Component({
  selector: 'app-cardcupon',
  templateUrl: './cardcupon.component.html',
  styleUrls: ['./cardcupon.component.css']
})
export class CardcuponComponent {
  @Input() cardcupon: Cupon;

}
