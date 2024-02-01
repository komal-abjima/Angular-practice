import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Anna', 'Chris']

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
         'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
         'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
        
      }),
      // 'username': new FormControl(null, Validators.required),
      // 'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });


    // value changes
    // this.signUpForm.valueChanges.subscribe(
    //   (value) =>{
    //     console.log(value);
    //   }
    // )

    // ṣtatus changes
    this.signUpForm.statusChanges.subscribe(
      (status) =>{
        console.log(status);
      }
    )

    // setValue and patchValue()
    this.signUpForm.setValue({
      'userData':{
        'username': 'ABC',
        'email': 'abc@gmail.com'

      },
      'gender': 'female',
      'hobbies': []
    })
    this.signUpForm.patchValue({
      'userData': {
        'username': 'Max'
      }
    })
  }

  onSubmit(){
    console.log(this.signUpForm);
    this.signUpForm.reset();
    this.signUpForm.patchValue({
      'gender': 'female'
    })
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  // custom validations
  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;  
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@gmail.com'){
          resolve({'emailIsForbidden': true});
        }
        else{
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }

}
