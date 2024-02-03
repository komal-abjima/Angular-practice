import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
 
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  aadharForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}
 
  ngOnInit(): void {
    this.aadharForm = this.formBuilder.group({
      aadharNumber: ['', [Validators.required]],
    });
  }
 

sendOTP(): void {
  if (this.aadharForm.valid) {
    const aadharNumber = this.aadharForm.value.aadharNumber;
    const formData = { id: '1', aadharNumber, otp: '', mobileNumber: '' };
    this.dataService.addFormData(formData);
    this.router.navigate(['/second', formData.id]);
  }
}
}