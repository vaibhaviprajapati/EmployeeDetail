import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewEmployeeRoutingModule } from './view-employee-routing.module';

@NgModule({
  imports: [
    CommonModule, ViewEmployeeRoutingModule
  ],
  declarations: [ViewEmployeeComponent]
})
export class ViewEmployeeModule { }
