import {Component, Input, Output} from "@angular/core";
import {Department} from "../../Models/department.model";
import {MainServiceComponent} from "../../service/mainService.component";
import {Employee} from "../../Models/employee.model";

@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: 'employeeList.component.html',
    styleUrls: ['employeeList.component.css']
})

export class EmployeeListComponent {
@Input() departmentEmployee;
@Input() selectedDepartment;
}