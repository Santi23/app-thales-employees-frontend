import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeLayoutComponent } from './layout/employee-layout.component';
import { EmployeeTableComponent } from './components/table/employee-table.component';
import { EmployeeFilterFormComponent } from './components/employee-filter-form/employee-filter-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeLayoutComponent, EmployeeTableComponent, EmployeeFilterFormComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [EmployeeLayoutComponent]
})
export class EmployeeModule { }
