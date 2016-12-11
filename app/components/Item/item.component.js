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
var item_model_1 = require("../../Models/item.model");
var ItemComponent = (function () {
    function ItemComponent() {
        this.deleted = new core_1.EventEmitter();
        this.findingCommnent = new core_1.EventEmitter();
    }
    ItemComponent.prototype.delete = function () {
        this.deleted.emit(this.item);
    };
    ItemComponent.prototype.findComment = function () {
        this.findingCommnent.emit(this.item);
    };
    return ItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", item_model_1.Item)
], ItemComponent.prototype, "item", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ItemComponent.prototype, "deleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ItemComponent.prototype, "findingCommnent", void 0);
ItemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'item-app',
        templateUrl: 'item.component.html',
        styleUrls: ['item.component.css']
    }),
    __metadata("design:paramtypes", [])
], ItemComponent);
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map