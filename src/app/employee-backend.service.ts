import { EmployeeDetail } from './EmployeeDetail.model';
import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { HttpRequest } from 'selenium-webdriver/http';
@Injectable()
export class EmployeeBackendService implements InMemoryDbService {
  createDb() {
  const Employee = [
    {
      id : 1,
      name : 'vaibhavi',
      designation : 'HR',
      date : '10/4/1997'
  },
  {
    id : 2,
    name : 'Tina',
    designation : 'Manager',
    date : '20/2/1995'
  },
  {
    id : 3,
    name : 'Akshita',
    designation : 'Team Leader',
    date : '13/2/1997'
  }
    ];
    return {
      Employee: Employee
     };

 }
 genId(Employee: EmployeeDetail[]): number {
  return Employee.length > 0 ? Math.max(...Employee.map(form => form.id)) + 1 : 1;
}
}
