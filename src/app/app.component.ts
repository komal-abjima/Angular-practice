import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  @ViewChild('registrationForm') form: NgForm;

  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  emailAddress: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  userName: string = '';
  IsAgreed: boolean = false;

  

  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'},
    {id: 'check-other', value: 'other', display: 'Prefer not to say'},
  ]

  defaultGender: string = 'male';
  defaultCountry: string = 'India';

  OnFormSubmitted(){
    console.log(this.form);
    
    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.emailAddress = this.form.value.email;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;
    this.userName = this.form.value.username;
    this.dob = this.form.value.dob;
    this.IsAgreed = this.form.value;

    //this.form.reset();

    this.form.form.patchValue({
      gender: 'male',
      address: {
        country: 'India'
      }
    })
  }

  GenerateUsername(){
    let username = '';
    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.dob = this.form.value.dob;
    // console.log(this.firstName);
    // let firstName = this.form.value.username

    if(this.firstName.length >= 3){
      username += this.firstName.slice(0, 3);
    }
    else {
      username += this.firstName;
    }

    if(this.lastName.length >= 3){
      username += this.lastName.slice(0, 3);
    }
    else {
      username += this.lastName;
    }

    let datetime = new Date(this.dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    console.log(username);

    

    // // this.form.controls['username'].value = username;
    // console.log(this.form.value.username)

    // this.form.setValue({
    //   firstname: this.form.value.firstname,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phone: this.form.value.phone,
    //   dob: this.form.value.dob,
    //   gender: this.form.value.gender,
    //   username: username,
    //   address: {
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postal: this.form.value.address.postal
    //   }
    // })

    this.form.form.patchValue({
      username: username,
      // address: {
      //   country: 'Japan'
      // }
    })
   }
}

// my
//   @ViewChild('registrationForm') form: NgForm;
//   genders = ['Male', 'Female', 'Others']
//   firstName: string = '';
//   lastName: string = '';
//   emailAdd: string = '';
//   dob: string = '';
//   gender: string = '';
//   country: string = '';
//   city: string = '';
//   region : string = '';
//   postal: string ='';
//   userName: string='';

//   IsAgreed: boolean = false;

//   defaultCountry: string = 'india'
//   // onSubmit(form: HTMLFormElement){
//     onSubmit(){
//     // console.log('form submited');
//     console.log(this.form);
//     this.firstName = this.form.value.firstName;
//     this.lastName = this.form.value.lastName;
//     this.emailAdd = this.form.value.email;
//     this.dob = this.form.value.dob;
//     this.gender = this.form.value.gender;
//     this.country = this.form.value.address.country;
//     this.city = this.form.value.address.city;
//     this.region = this.form.value.address.region;
//     this.postal = this.form.value.address.postal;
//     this.userName = this.form.value.username;
//     this.IsAgreed = this.form.value;
    
//     // console.log(this.form.controls['fname'].value);
//     // console.log(this.form.value.lname);
//     // console.log(this.form.value.phone);
//     // console.log(this.form.value.gender);
//     // console.log(this.form.value.address.city);

//     this.form.reset()

//     this.form.form.patchValue({

//       address:{
//         country: 'india'
//       }
//     })


//   }
//   onCreateUsername(){
//     let username = '';
//     if(this.firstName.length >= 3){
//       username += this.firstName.slice(0,3)
//     }
//     else{
//       username += this.firstName;
//     }
//     if(this.lastName.length >= 3){
//       username += this.lastName.slice(0,3);
//     }
//     else{
//       username += this.lastName;
//     }
//     let datetime = new Date(this.dob)
//     username += datetime.getFullYear();
//     username = username.toLowerCase();
//     console.log(username);
//     this.form.value.username = username;

//     this.form.form.patchValue({
//      username : username,
//     //  address:{
//     //   country: 'India'
//     //  }
//     })

//     // this is the setValue() example write all the fields in this if you want to use this method
//     // this.form.setValue({
//     //    firstName: this.form.value.firstName,
//     //    lastName: this.form.value.lastName,
//     //    address:{
//     //     street1: this.form.value.aaddress.street1
//     //    }

//     // })


//     // const Suggestusername = 'SuperUser';
//     // this.form.form.patchValue({
//     //   username: Suggestusername
//     // })
//   }
// }
