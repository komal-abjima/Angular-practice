// second.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
 
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  id: string;
  form: FormGroup;
  staticOtp: string = '1234'; 
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder
  ) {}
 
  ngOnInit(): void {
this.id = this.route.snapshot.params.id;
this.form = this.fb.group({
      mobileNumber: ['', Validators.required],
      otp: ['', Validators.required],
    });
  }
 
  onVerify(): void {
    if (this.form.valid) {
      const enteredOtp = this.form.value.otp;
 
      if (enteredOtp === this.staticOtp) {
        this.dataService.addFormData({
id: this.id,
          mobileNumber: this.form.value.mobileNumber,
          otp: enteredOtp,
        });
this.router.navigate(['/third', this.id]);
      } else {
        alert('OTP is not correct. Please try again.');
      }
    }
  }
}