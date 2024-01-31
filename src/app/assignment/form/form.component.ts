import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
@ViewChild('assignForm') assignmentForm: NgForm;
defaultSubscription = "advanced";
submittedForm = false;
user = {
  email: '',
  subscription: '',
  password: ''
}



  onSubmit(){
    console.log(this.assignmentForm);
     // prinitng values on console
     console.log(this.assignmentForm.value.email);
     console.log(this.assignmentForm.value.subscription);
     console.log(this.assignmentForm.value.password);
    this.submittedForm = true;
    this.user.email = this.assignmentForm.value.email;
    this.user.subscription = this.assignmentForm.value.subscription;
    this.user.password = this.assignmentForm.value.password;
   
    this.assignmentForm.reset();
   

  }

}
