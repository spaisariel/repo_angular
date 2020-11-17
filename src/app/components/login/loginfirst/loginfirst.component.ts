import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginfirst',
  templateUrl: './loginfirst.component.html',
  styleUrls: ['./loginfirst.component.css']
})
export class LoginfirstComponent implements OnInit {

   constructor() { }

  ngOnInit() {

  }

   onSubmit(form: NgForm) {
     console.log(form);
  }

}
