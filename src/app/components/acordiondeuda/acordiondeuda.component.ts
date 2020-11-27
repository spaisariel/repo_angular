import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordiondeuda',
  templateUrl: './acordiondeuda.component.html',
  styleUrls: ['./acordiondeuda.component.css']
})
export class AcordiondeudaComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
