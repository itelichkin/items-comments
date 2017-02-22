import {Employee} from "../Models/employee.model";
import {Http, Headers} from "@angular/http";
import {Injectable, Input} from "@angular/core";

import 'rxjs/add/operator/toPromise';
import {Department} from "../Models/department.model";


@Injectable()
export class MainServiceComponent {
    @Input() selectedItem: Employee;

    employees: Array<Employee> = [];
    private employeesUrl = 'app/employees';
    private departmentsUrl = 'app/departments';
    private headers = new Headers({'Content-Type': 'application/json'});

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


    constructor(private http: Http) {
    }


    getDepartments(): Promise<Department[]> {
        return this.http.get(this.departmentsUrl)
            .toPromise()
            .then(response => response.json().data as Department[])
            .catch(this.handleError);
    }


    deleteDepartment(id: number): Promise<void> {
        const url = `${this.departmentsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


    create(name: any): Promise<Department> {
        return this.http
            .post(this.departmentsUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getEmployees(): Promise<Employee[]> {
        return this.http.get(this.employeesUrl)
            .toPromise()
            .then(response => response.json().data as Employee[])
            .catch(this.handleError);
    }

}