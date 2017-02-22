import {Component, OnInit, Output} from "@angular/core";

import {MainServiceComponent} from "../../service/mainService.component";
import {Employee} from "../../Models/employee.model";
import {Department} from "../../Models/department.model";


@Component({
    moduleId: module.id,
    selector: 'department-list',
    templateUrl: 'departmentList.component.html',
    styleUrls: ['departmentList.component.css']
})

export class DepartmentListComponent implements OnInit {
    departments: Department[];
    employees: Employee[];
    departmentEmployee = [];
    selectedDepartment: Department;
    newDepartmentTitle: string = '';

    constructor(private mainService: MainServiceComponent) {
    }

    ngOnInit(): void {
        this.mainService.getDepartments().then(departments => this.departments = departments);


        this.mainService.getEmployees().then(employees => this.employees = employees);
    }

    addDepartment() {
        let department: Department = new Department(this.newDepartmentTitle);
        this.mainService.create(department.name)
            .then(department => {
                this.departments.push(department);
                this.newDepartmentTitle = '';
            });
    }

    onSelect(department: Department) {
        this.selectedDepartment = department;
        this.findEmployees();
    }


    onDepartmentDelete(department: Department) {
        this.mainService
            .deleteDepartment(department.id)
            .then(() => {
                this.departments = this.departments.filter(i => i !== department);
                if (this.selectedDepartment === department) {
                    this.selectedDepartment = null;
                }
            });
    }
    findEmployees(){
        this.departmentEmployee = [];
        for(let employee of this.employees){
            for(let departmentEmployee of employee.count){
                if(departmentEmployee.department == this.selectedDepartment.id){
                    this.departmentEmployee.push(employee);
                }
            }
        }
    }

}