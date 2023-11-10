import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../modal/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getAllPage(page: number, itemsPerPage: number) {
    throw new Error('Method not implemented.');
  }
  create(value: any) {
    throw new Error('Method not implemented.');
  }
  get(academicYearId: any) {
    throw new Error('Method not implemented.');
  }
  update(academicyearid: any, value: any) {
    throw new Error('Method not implemented.');
  }
  private apiServeUrl = environment.apiBaseUrl; 
                //coming from "environment.ts" for helping to connect on prt # of backend
  // private apiServeUrl = "http://localhost:9092";
  constructor(private httpClient : HttpClient) {}  // prtocol for using in backend


  //<---f(x) for using to implement all methods used in backend CRUD--->//
  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiServeUrl}/employee/all`);
  }

  public addEmployees(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(
      `${this.apiServeUrl}/employee/add`,
      employee
    );
  }

  public updateEmployees(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(
      `${this.apiServeUrl}/employee/update`,
      employee
    );
  }
  public deleteEmployees(employeeId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.apiServeUrl}/employee/delete/${employeeId}`
    );
  }
}
