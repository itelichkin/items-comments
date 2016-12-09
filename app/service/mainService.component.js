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
var item_model_1 = require("../Models/item.model");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/add/operator/toPromise');
var MainServiceComponent = (function () {
    function MainServiceComponent(http) {
        this.http = http;
        this.comments = [];
        this.itemsUrl = 'app/items';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headersComment = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    MainServiceComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MainServiceComponent.prototype.getItems = function () {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MainServiceComponent.prototype.deleteItem = function (id) {
        var url = this.itemsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    MainServiceComponent.prototype.create = function (name) {
        return this.http
            .post(this.itemsUrl, JSON.stringify({ name: name, comments: this.comments }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MainServiceComponent.prototype.addComment = function (item, comment) {
        var url = this.itemsUrl + "/" + item.comments;
        return this.http
            .post(url, JSON.stringify({ message: comment }))
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_model_1.Item)
    ], MainServiceComponent.prototype, "selectedItem", void 0);
    MainServiceComponent = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MainServiceComponent);
    return MainServiceComponent;
}());
exports.MainServiceComponent = MainServiceComponent;
//# sourceMappingURL=mainService.component.js.map