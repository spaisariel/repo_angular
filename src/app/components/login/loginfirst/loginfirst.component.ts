import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginfirst',
  templateUrl: './loginfirst.component.html',
  styleUrls: ['./loginfirst.component.css']
})
export class LoginfirstComponent implements OnInit {

  maxDate;

  constructor() { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

   onSubmit(form: NgForm) {
     console.log(form);
  }

}
