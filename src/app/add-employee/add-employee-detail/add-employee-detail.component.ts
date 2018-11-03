import { EmployeeDetail } from './../../EmployeeDetail.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeDataService } from '../../core/employee-data.service';
@Component({
  selector: 'app-add-employee-detail',
  templateUrl: './add-employee-detail.component.html',
  styleUrls: ['./add-employee-detail.component.css']
})
export class AddEmployeeDetailComponent implements OnInit {
  postEmployeeData: EmployeeDetail[];
  /**validation for employee data */
  employeeData = this.fb.group(
    {

        name : ['', Validators.required],
        designation : ['', Validators.required],
        date : ['', Validators.required],
    }
  );
  constructor( private fb: FormBuilder,
            private employeeService: EmployeeDataService) {
              this.postEmployeeData = [];
  }

  ngOnInit() {

  }
   onSubmit() {
    const employeeDetail = this.employeeService.addEmployeeData(this.employeeData.value)
    .subscribe(data => {
      this.postEmployeeData.push(data);

    });
    console.log('post', this.postEmployeeData);
  }
  delete(id) {
    this.postEmployeeData.pop();
  }
}
