// data.service.ts
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private formData: { [value: string]: any } = {};
  private formData: any[] = [];
 
//   addFormData(formData: { [value: string]: any }): void {
//     // Using the ID as the key to store form data
// const id = formData.id;
//     this.formData[id] = formData;
//   }
addFormData(data: any){
  this.formData.push(data);

}
    
 
  getFormDataById(id: string): { [value: string]: any } | undefined {
    return this.formData.find((data) => data.id === id);
  }
}