import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('registrationForm') form: NgForm;
  // onSubmit(form: HTMLFormElement){
    onSubmit(){
    // console.log('form submited');
    console.log(this.form);
    console.log(this.form.controls['fname'].value);
    console.log(this.form.value.lname);
    console.log(this.form.value.phone);
    console.log(this.form.value.gender);


  }
}
