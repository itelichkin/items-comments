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
var item_model_1 = require("../../Models/item.model");
var ItemsListComponent = (function () {
    function ItemsListComponent(mainService) {
        this.mainService = mainService;
        this.newItemTitle = '';
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getItems().then(function (items) { return _this.items = items; });
    };
    ItemsListComponent.prototype.addItem = function () {
        var _this = this;
        var item = new item_model_1.Item(this.newItemTitle);
        this.mainService.create(item.name)
            .then(function (item) {
            _this.items.push(item);
            _this.newItemTitle = '';
        });
    };
    ItemsListComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    /*findComment(item: Item) {
        this.mainService.getComments(item)
            .then(comments => {
                this.allItemComments = comments;
                /!*console.log(this.allItemComments);*!/
                return this.allItemComments;
            })
    }*/
    ItemsListComponent.prototype.onItemDelete = function (item) {
        var _this = this;
        this.mainService
            .deleteItem(item.id)
            .then(function () {
            _this.items = _this.items.filter(function (i) { return i !== item; });
            if (_this.selectedItem === item) {
                _this.selectedItem = null;
            }
        });
    };
    ItemsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'item-list',
            templateUrl: 'itemList.component.html',
            styleUrls: ['itemList.component.css']
        }), 
        __metadata('design:paramtypes', [mainService_component_1.MainServiceComponent])
    ], ItemsListComponent);
    return ItemsListComponent;
}());
exports.ItemsListComponent = ItemsListComponent;
//# sourceMappingURL=itemList.component.js.map