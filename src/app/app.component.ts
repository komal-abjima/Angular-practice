import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('TDForm') Signupform: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  submittedForm = false;
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // it overwrite all the form values
    // this.Signupform.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // });

    // it overwrite only a particular form value not all 
    this.Signupform.form.patchValue({
      userData: {
        username: suggestedName
      }

     

    })
  }
  onSubmit(){
    // onSubmit(form:ngForm) {
    // console.log('form submitted..')
    // console.log(this.Signupform);
    this.submittedForm = true;
    this.user.username = this.Signupform.value.userData.username;
    this.user.email = this.Signupform.value.userData.email;
    this.user.secret = this.Signupform.value.secret;
    this.user.answer = this.Signupform.value.questionAnswer;
    this.user.gender = this.Signupform.value.gender;

    this.Signupform.reset();
  }
}
