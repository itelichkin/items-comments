import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {MainServiceComponent} from "./service/mainService.component";
import {RouterModule} from "@angular/router";
import {DepartmentListComponent} from "./components/DepartmentList/deparmentList.component";
import {ItemsComponent} from "./components/items.component";
import {DepartmentComponent} from "./components/Department/department.component";
import {HttpModule, JsonpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {ItemsData} from "./Data/DepartmentsData";
import {EmployeeListComponent} from "./components/EmployeeList/employeeList.component";
import {CommentComponent} from "./components/Employee/employee.component";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        InMemoryWebApiModule.forRoot(ItemsData),
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: ItemsComponent
            },
            {
                path: 'departments',
                component: DepartmentListComponent
            },
            {
                path: 'employee',
                component: EmployeeListComponent
            }

        ])
    ],
    declarations: [
        AppComponent,
        DepartmentListComponent,
        DepartmentComponent,
        ItemsComponent,
        EmployeeListComponent,
        CommentComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        MainServiceComponent
    ]
})

export class AppModule{}