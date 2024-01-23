import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  employees: Employee[];
  id: number;
  name: string = '';
  department: string = '';
  editMode: boolean = false;
  editEmployeeId: number;


  @Input()
  searchText: string = '';


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employees = this.employeeService.getEmployee();

   }

  // add employee function
  addEmployee() {
    this.employees.push({
      id: this.employees.length + 1,
      name: this.name,
      department: this.department
    });
  }

  //delete employee function
  deleteRow(id) {
    for (let i = 0; i < this.employees.length; ++i) {
      if (this.employees[i].id === id) {
        this.employees.splice(i, 1);
      }
    }
  }

  //edit employee function
  EditMode(id: number): void {
    this.editMode = !this.editMode;
    this.editEmployeeId = id;
  }




}