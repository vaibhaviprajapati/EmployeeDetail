import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeDetailComponent } from './add-employee-detail/add-employee-detail.component';

const routes: Routes = [
  {
    path : '',
    component : AddEmployeeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmployeeRoutingModule {

}
