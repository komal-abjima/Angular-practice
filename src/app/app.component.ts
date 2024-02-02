import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators} from './Validators/noSpaceAllowed.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    reactiveForm: FormGroup;
    formStatus: string = '';

    genders = [
      {id: 'check-male', value: 'male', display: 'Male'},
      {id: 'check-female', value: 'female', display: 'Female'},
      {id: 'check-other', value: 'other', display: 'Prefer not to say'},
    ]

    ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        'firstname': new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
        'lastname': new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
        'email': new FormControl(null,[Validators.email, Validators.required]),
        'username': new FormControl(null, Validators.required, CustomValidators.checkUserName),
        'dob': new FormControl(null, Validators.required),
        'gender': new FormControl('female'),
        'address': new FormGroup({
          'street': new FormControl(null, Validators.required),
        'country': new FormControl('india'),
        'city': new FormControl(null, Validators.required),
        'region': new FormControl(null),
        'postal': new FormControl(null, Validators.required)

        }),
        skills: new FormArray([
          new FormControl(null, Validators.required),
          // new FormControl(null),
          // new FormControl(null)
        ]),
        experience: new FormArray([
          // new FormGroup({
          //   'company': new FormControl(null),
          //   'position': new FormControl(null),
          //   'totalExp': new FormControl(null),
          //    'start': new FormControl(null),
          //    'end': new FormControl(null)
          // })

        ])
      })
       // valueChanges()
        // this.reactiveForm.get('firstname').valueChanges.subscribe((value)=>{
        //   console.log(value);
        // })

        // this.reactiveForm.valueChanges.subscribe((data)=>{
        //   console.log(data);
        // })

        // statusChanges()
        // this.reactiveForm.get('email').statusChanges.subscribe((status)=>{
        //   console.log(status);
        // })
        this.reactiveForm.statusChanges.subscribe((status)=>{
          console.log(status);
          this.formStatus = status;
        })


    }

    onSubmit(){
      console.log(this.reactiveForm);
    }
    AddSkills(){
      (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
    }
    DeleteSkill(index: number){
      const controls = (<FormArray>this.reactiveForm.get('skills'));
      controls.removeAt(index);
    }

    addExperience(){
      const formgroup = new FormGroup({
          'company': new FormControl(null),
          'position': new FormControl(null),
          'totalExp': new FormControl(null),
           'start': new FormControl(null),
           'end': new FormControl(null)
        });

       (<FormArray>this.reactiveForm.get('experience')).push(formgroup);
       
    }

    deleteExperience(index: number){
      const controls = (<FormArray>this.reactiveForm.get('experience'));
      controls.removeAt(index);
    }

    GenerateUsername(){
      let username = '';
      const fname: string = this.reactiveForm.get('firstname').value;
      const lname: string = this.reactiveForm.get('lastname').value;
      const dob: string = this.reactiveForm.get('dob').value;
      if(fname.length >= 3){
        username += fname.slice(0,3)
      }
      else{
        username += fname;
      }
      if(lname.length >= 3){
        username += lname.slice(0,3)
      }
      else{
        username += lname;
      }
      let datetime = new Date(dob);
      username += datetime.getFullYear();
      username = username.toLowerCase();
      console.log(username);

      this.reactiveForm.setValue({
          firstname: this.reactiveForm.get('firstname').value,
          lastname: this.reactiveForm.get('lastname').value,
          email: this.reactiveForm.get('email').value,
          username: username,
          dob: this.reactiveForm.get('dob').value,
          gender: this.reactiveForm.get('gender').value,
          address: {
            street: this.reactiveForm.get('address.street').value,
            country: this.reactiveForm.get('address.country').value,
            city: this.reactiveForm.get('address.city').value,
            region: this.reactiveForm.get('address.region').value,
            postal: this.reactiveForm.get('address.postal').value
          },
          skills: this.reactiveForm.get('skills').value,
          experience: this.reactiveForm.get('experience').value
        })
    }

}
