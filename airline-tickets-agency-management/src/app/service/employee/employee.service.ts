import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URl = 'http://localhost:8080/employee';
  private API_URL = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) {
  }

  getListEmployee(typeSearch: string, valueSearch: string, page: number): Observable<Employee[]> {
    return this.http.get<[]>(`${this.URl}/list?typeSearch=${typeSearch}&valueSearch=${valueSearch}&page=${page}`);
  }

  deleteEmployee(employeeId: number) {
    return this.http.get(`${this.URl}/delete/${employeeId}`);
  }

  addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.API_URL + '/add-employee', employee);
  }
}
