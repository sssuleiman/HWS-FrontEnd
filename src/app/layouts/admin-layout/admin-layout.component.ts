import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/modal/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  public employees!: Employee[];

  constructor (private employeeservice: EmployeeService){}

  ngOnInit():void{
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeservice.getEmployees().subscribe(
      data => {
        this.employees = data;
      }
      );
    }
}
