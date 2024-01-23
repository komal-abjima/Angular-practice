import { Employee } from "./employee.model";

export class EmployeeService{
  
 private employees: Employee[] = [
        new Employee(1, 'Ashwin', 'Sales'),
        new Employee(2, 'Khushboo', 'IT'),
        new Employee(3, 'Prince', 'Production')
      ];

      getEmployee(){
        return this.employees.slice();
      }
}