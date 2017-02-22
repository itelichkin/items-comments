import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Comment} from "../../Models/comment.model";
@Component({
    moduleId: module.id,
    selector: 'comment-app',
    templateUrl: 'comment.component.html',
    styleUrls:['comment.component.css']
})

export class CommentComponent {
    @Input() elem: Comment;


}