import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/modal/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public employees!: Employee[];

  // constructor() { }
  // employees =[
  //   {
  //     "name" : "rama",
  //     "email": "eama@jsndij",
  //     "jobTitle":"wse",
  //     "imageUrl":"dacaca",
  //     "status": "gftv"
  //   }
  // ]


  // constructor (private employeeservice: EmployeeService){}
  constructor (private employeeservice: EmployeeService){}

  ngOnInit():void{
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeservice.getEmployees().subscribe(
      data => {
        this.employees = data;
      }
      // (resp: Employee[])=>{
      //   this.employees= resp;
      // }
      // ,
      // (error: HttpErrorResponse) =>{
      //    alert(error.message);
      // }
    );
}

}
