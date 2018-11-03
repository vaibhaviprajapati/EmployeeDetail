import { EmployeeDataService } from './core/employee-data.service';

import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeBackendService } from './employee-backend.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     CoreModule,
     EmployeeRoutingModule,
     ReactiveFormsModule,
     HttpClientModule,
     HttpClientInMemoryWebApiModule.forRoot(EmployeeBackendService)
  ],
  providers: [EmployeeDataService , EmployeeBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
