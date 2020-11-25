import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-encabezadouncomponente',
  templateUrl: './encabezadouncomponente.component.html',
  styleUrls: ['./encabezadouncomponente.component.css']
})
export class EncabezadouncomponenteComponent {
  @Input() title: string;
}
