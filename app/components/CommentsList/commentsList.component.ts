import {Component, OnInit, Input} from "@angular/core";
import {Item} from "../../Models/item.model";
import {Comment} from "../../Models/comment.model";
import {MainServiceComponent} from "../../service/mainService.component";

@Component({
    moduleId: module.id,
    selector: 'comment-list',
    templateUrl: 'commentList.component.html',
    styleUrls: ['commentList.component.css']
})

export class CommentListComponent {
    @Input() selectedItem: Item;

    newCommentTitle: string = '';

    constructor(private mainService: MainServiceComponent) {
    }

    addOneComment() {
        let comment: Comment = new Comment(this.newCommentTitle);
        let item: Item = this.selectedItem;
        this.mainService.addComment(item, comment.message)
            .then(comment => {
                item.comments.push(comment);
                this.newCommentTitle = '';
            });
    }


}