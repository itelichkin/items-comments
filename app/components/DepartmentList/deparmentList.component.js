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
var core_1 = require("@angular/core");
var mainService_component_1 = require("../../service/mainService.component");
var department_model_1 = require("../../Models/department.model");
var DepartmentListComponent = (function () {
    function DepartmentListComponent(mainService) {
        this.mainService = mainService;
        this.departmentEmployee = [];
        this.newDepartmentTitle = '';
    }
    DepartmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getDepartments().then(function (departments) { return _this.departments = departments; });
        this.mainService.getEmployees().then(function (employees) { return _this.employees = employees; });
    };
    DepartmentListComponent.prototype.addDepartment = function () {
        var _this = this;
        var department = new department_model_1.Department(this.newDepartmentTitle);
        this.mainService.create(department.name)
            .then(function (department) {
            _this.departments.push(department);
            _this.newDepartmentTitle = '';
        });
    };
    DepartmentListComponent.prototype.onSelect = function (department) {
        this.selectedDepartment = department;
        this.findEmployees();
    };
    DepartmentListComponent.prototype.onDepartmentDelete = function (department) {
        var _this = this;
        this.mainService
            .deleteDepartment(department.id)
            .then(function () {
            _this.departments = _this.departments.filter(function (i) { return i !== department; });
            if (_this.selectedDepartment === department) {
                _this.selectedDepartment = null;
            }
        });
    };
    DepartmentListComponent.prototype.findEmployees = function () {
        this.departmentEmployee = [];
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            for (var _b = 0, _c = employee.count; _b < _c.length; _b++) {
                var departmentEmployee = _c[_b];
                if (departmentEmployee.department == this.selectedDepartment.id) {
                    this.departmentEmployee.push(employee);
                }
            }
        }
    };
    return DepartmentListComponent;
}());
DepartmentListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'department-list',
        templateUrl: 'departmentList.component.html',
        styleUrls: ['departmentList.component.css']
    }),
    __metadata("design:paramtypes", [mainService_component_1.MainServiceComponent])
], DepartmentListComponent);
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=deparmentList.component.js.map