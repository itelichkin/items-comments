"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var employee_model_1 = require("../Models/employee.model");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var MainServiceComponent = (function () {
    function MainServiceComponent(http) {
        this.http = http;
        this.employees = [];
        this.employeesUrl = 'app/employees';
        this.departmentsUrl = 'app/departments';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    MainServiceComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MainServiceComponent.prototype.getDepartments = function () {
        return this.http.get(this.departmentsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MainServiceComponent.prototype.deleteDepartment = function (id) {
        var url = this.departmentsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    MainServiceComponent.prototype.create = function (name) {
        return this.http
            .post(this.departmentsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MainServiceComponent.prototype.getEmployees = function () {
        return this.http.get(this.employeesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    return MainServiceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], MainServiceComponent.prototype, "selectedItem", void 0);
MainServiceComponent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MainServiceComponent);
exports.MainServiceComponent = MainServiceComponent;
//# sourceMappingURL=mainService.component.js.map