import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {
      name: 'sule',
      depart: 'ict',
      active: true,
    },
    {
      name: 'sule',
      depart: 'ict',
      active: false,
    },
    {
      name: 'sule',
      depart: 'ict',
      active: false,
    },
  ];
  date = new Date();

  // constructor(private router: Router ) {}
  constructor( ) {}

  ngOnInit(): void {
    this.fetchAllEmployee();
    console.log;
  }
  fetchAllEmployee() {
    // this.employeeService.getAllEmloyee().subscribe((res: any) => {
    //   console.log("employee response => ", res);
    // })
  }

  viewUser(data: any) {
    console.log('user details', data);
  }

  onCreateUser() {
    // this.router.navigateByUrl('/create-user');
    // this.router.navigate(['/pages/create-user']);
    // this.router.navigate(['../pages/create-user']);
  }

}
