import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

@Component({
  selector: 'employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.scss']
})
export class EmployeeLayoutComponent implements OnInit {

  employees = [];
  filteredEmployees = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = [...this.employees];
    });
  }

  updateFilteredEmployees(filteredList: any[]) {
    this.filteredEmployees = filteredList;
  }
}
