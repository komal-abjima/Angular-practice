import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
 
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent implements OnInit {
  form: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}
 
  ngOnInit(): void {
    this.initForm();
const id = this.route.snapshot.params.id;
    const formData = this.dataService.getFormDataById(id);
    this.form.patchValue(formData);
  }
 
  initForm(): void {
this.form = this.fb.group({
      otp: ['', Validators.required],
    });
  }
 
  verify(event: Event): void {
    event.preventDefault(); 
    if (this.form.valid) {
      const enteredOTP = this.form.value.otp;
 
      if (enteredOTP === '1234') {
      const id = this.route.snapshot.params.id;
        this.router.navigate(['/fourth', id]);
      } else {
        alert('Invalid OTP. Please enter OTP as 888.');
      }
    }
  }
}