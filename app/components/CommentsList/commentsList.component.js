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
var comment_model_1 = require("../../Models/comment.model");
var mainService_component_1 = require("../../service/mainService.component");
var CommentListComponent = (function () {
    function CommentListComponent(mainService) {
        this.mainService = mainService;
        this.newCommentTitle = '';
    }
    CommentListComponent.prototype.addOneComment = function () {
        var _this = this;
        var comment = new comment_model_1.Comment(this.newCommentTitle);
        var item = this.selectedItem;
        this.mainService.addComment(item, comment.message)
            .then(function (comment) {
            item.comments.push(comment);
            _this.newCommentTitle = '';
        });
    };
    return CommentListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", item_model_1.Item)
], CommentListComponent.prototype, "selectedItem", void 0);
CommentListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'comment-list',
        templateUrl: 'commentList.component.html',
        styleUrls: ['commentList.component.css']
    }),
    __metadata("design:paramtypes", [mainService_component_1.MainServiceComponent])
], CommentListComponent);
exports.CommentListComponent = CommentListComponent;
//# sourceMappingURL=commentsList.component.js.map