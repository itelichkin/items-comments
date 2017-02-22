import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Item} from "../../Models/item.model";
@Component({
    moduleId: module.id,
    selector: 'item-app',
    templateUrl: 'item.component.html',
    styleUrls:['item.component.css']
})

export class ItemComponent {
    @Input() item: Item;
    @Output() deleted = new EventEmitter();
    @Output() findingCommnent = new EventEmitter();

    delete() {
        this.deleted.emit(this.item);
    }
    findComment(){
        this.findingCommnent.emit(this.item);
    }

}