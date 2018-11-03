import { EmployeeDetail } from './../../EmployeeDetail.model';
import { EmployeeDataService } from './../../core/employee-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  public EmployeeData: EmployeeDetail[];

  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit() {


      this.employeeService.getEmployeeData().subscribe(data => {
      this.EmployeeData = data;
      });
      console.log(this.EmployeeData);
      }




}
