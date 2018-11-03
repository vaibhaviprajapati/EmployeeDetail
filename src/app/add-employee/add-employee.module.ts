import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeDetailComponent } from './add-employee-detail/add-employee-detail.component';
import { AddEmployeeRoutingModule } from './add-employee-routing.module';

@NgModule({
  imports: [
    CommonModule, AddEmployeeRoutingModule, ReactiveFormsModule
  ],
  declarations: [AddEmployeeDetailComponent]
})
export class AddEmployeeModule { }
