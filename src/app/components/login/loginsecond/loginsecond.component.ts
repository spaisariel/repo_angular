import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginsecond',
  templateUrl: './loginsecond.component.html',
  styleUrls: ['./loginsecond.component.css']
})
export class LoginsecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
 }
}
