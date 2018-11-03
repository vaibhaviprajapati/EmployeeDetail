import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EmployeeRoutingModule } from '../employee-routing.module';

@NgModule({
  imports: [
    CommonModule, EmployeeRoutingModule
  ],
  declarations: [SidebarComponent, TopbarComponent],
  exports: [SidebarComponent, TopbarComponent]
})
export class CoreModule { }
