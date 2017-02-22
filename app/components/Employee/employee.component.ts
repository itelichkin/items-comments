import {Component, Input} from "@angular/core";
import {Employee} from "../../Models/employee.model";
import {Department} from "../../Models/department.model";
@Component({
    moduleId: module.id,
    selector: 'employee-app',
    templateUrl: 'employee.component.html',
    styleUrls:['employee.component.css']
})

export class CommentComponent {
    @Input() employee: Employee;
    @Input() selectedDepartment: Department;
}