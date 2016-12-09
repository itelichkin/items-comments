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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var mainService_component_1 = require("./service/mainService.component");
var router_1 = require("@angular/router");
var itemList_component_1 = require("./components/ItemList/itemList.component");
var items_component_1 = require("./components/items.component");
var item_component_1 = require("./components/Item/item.component");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var ItemsData_1 = require("./Data/ItemsData");
var commentsList_component_1 = require("./components/CommentsList/commentsList.component");
var comment_component_1 = require("./components/Comment/comment.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(ItemsData_1.ItemsData),
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
                        path: 'items',
                        component: itemList_component_1.ItemsListComponent
                    },
                    {
                        path: 'comments',
                        component: commentsList_component_1.CommentListComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                itemList_component_1.ItemsListComponent,
                item_component_1.ItemComponent,
                items_component_1.ItemsComponent,
                commentsList_component_1.CommentListComponent,
                comment_component_1.CommentComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                mainService_component_1.MainServiceComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map