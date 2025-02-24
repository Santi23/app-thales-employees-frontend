import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'employee-filter-form',
  templateUrl: './employee-filter-form.component.html',
  styleUrls: ['./employee-filter-form.component.scss']
})
export class EmployeeFilterFormComponent {
  @Input() employees: any[] = [];  // Lista completa de empleados
  @Output() filteredEmployees = new EventEmitter<any[]>();  // Evento para enviar empleados filtrados

  employeeId = new FormControl('');  // Campo para el ID

  filterEmployees() {
    const id = this.employeeId.value?.trim();
    if (id) {
      const filteredList = this.employees.filter(emp => emp.id.toString() === id);
      this.filteredEmployees.emit(filteredList);
    } else {
      this.filteredEmployees.emit(this.employees);  // Si el ID está vacío, enviar todos los empleados
    }
  }
}
