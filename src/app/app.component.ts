import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('TDForm') form: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit(){
    // onSubmit(form:ngForm) {
    console.log('form submitted..')
    console.log(this.form);
  }
}
