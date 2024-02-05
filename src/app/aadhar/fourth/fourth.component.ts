import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
 
@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
})
export class FourthComponent implements OnInit {
  formData: any;
  form: FormGroup;
  selectedOption: '';
 
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private fb: FormBuilder
  ) {}
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.formData = this.dataService.getFormDataById(id);
    this.initForm();
  }
 
  initForm(): void {
this.form = this.fb.group({
      selectedOption: [''],
    });
  }
 
  verify(): void {
    const formData = this.getDataFromService();
    console.log('Aadhar Number:', formData?.aadharNumber);
    console.log('Mobile Number:', formData?.mobileNumber);
    console.log('Selected Option:', this.form.value.selectedOption);
  }
   
  getDataFromService(): any {
    const id = this.route.snapshot.paramMap.get('id');
    const formData = this.dataService.getFormDataById(id); 
    return formData;
 
  }
}