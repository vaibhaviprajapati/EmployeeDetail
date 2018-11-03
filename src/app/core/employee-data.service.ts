import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { EmployeeDetail } from '../EmployeeDetail.model';

@Injectable()
export class EmployeeDataService {

  constructor( private http: HttpClient) { }
/**Declare URL in web API */
private employeeDataURL = 'api/Employee';

/** Method for Get Data from Database */
getEmployeeData(): Observable<EmployeeDetail[]> {
  return this.http.get<EmployeeDetail[]>(this.employeeDataURL);
}
/** Method for post Data */
addEmployeeData (employee: EmployeeDetail): Observable<EmployeeDetail> {
  return this.http.post<EmployeeDetail>(this.employeeDataURL, employee);
}

// deleteEmployeeData (employee: EmployeeDetail): Observable<EmployeeDetail> {
//   return this.http.delete<EmployeeDetail>(this.employeeDataURL,employee.id);
// }
}
