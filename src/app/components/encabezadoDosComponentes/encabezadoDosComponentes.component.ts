import { Component, Input } from '@angular/core';
import { HeaderDosComponentes } from '@models/componentesGenericos';


@Component({
  selector: 'app-encabezadoDosComponentes',
  templateUrl: './encabezadoDosComponentes.component.html',
  styleUrls: ['./encabezadoDosComponentes.component.css']
})
export class EncabezadoDosComponentesComponent{
  @Input() dato: HeaderDosComponentes;
}
