import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeLayoutComponent } from './layout/employee-layout.component';
import { EmployeeTableComponent } from './components/table/employee-table.component';


@NgModule({
  declarations: [EmployeeLayoutComponent, EmployeeTableComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
