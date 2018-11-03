
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'AddEmployee',
    loadChildren : './add-employee/add-employee.module#AddEmployeeModule'
  },
  {
    path : 'ViewEmployee',
    loadChildren : './view-employee/view-employee.module#ViewEmployeeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
