"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var mainService_component_1 = require("./service/mainService.component");
var router_1 = require("@angular/router");
var deparmentList_component_1 = require("./components/DepartmentList/deparmentList.component");
var items_component_1 = require("./components/items.component");
var department_component_1 = require("./components/Department/department.component");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var DepartmentsData_1 = require("./Data/DepartmentsData");
var employeeList_component_1 = require("./components/EmployeeList/employeeList.component");
var employee_component_1 = require("./components/Employee/employee.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(DepartmentsData_1.ItemsData),
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: items_component_1.ItemsComponent
                },
                {
                    path: 'departments',
                    component: deparmentList_component_1.DepartmentListComponent
                },
                {
                    path: 'employee',
                    component: employeeList_component_1.EmployeeListComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            deparmentList_component_1.DepartmentListComponent,
            department_component_1.DepartmentComponent,
            items_component_1.ItemsComponent,
            employeeList_component_1.EmployeeListComponent,
            employee_component_1.CommentComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            mainService_component_1.MainServiceComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map