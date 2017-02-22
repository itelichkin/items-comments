import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Employee} from "../../Models/employee.model";
import {Department} from "../../Models/department.model";
@Component({
    moduleId: module.id,
    selector: 'department-app',
    templateUrl: 'department.component.html',
    styleUrls:['department.component.css']
})

export class DepartmentComponent {
    @Input() department: Department;
    @Output() deleted = new EventEmitter();

    delete() {
        this.deleted.emit(this.department);
    }

}