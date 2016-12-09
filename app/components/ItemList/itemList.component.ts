import {Component, OnInit} from "@angular/core";

import {MainServiceComponent} from "../../service/mainService.component";
import {Item} from "../../Models/item.model";



@Component({
    moduleId: module.id,
    selector: 'item-list',
    templateUrl: 'itemList.component.html',
    styleUrls:['itemList.component.css']
})

export class ItemsListComponent implements OnInit {
    items: Item[];
    selectedItem: Item;
    newItemTitle: string = '';

    constructor(private mainService: MainServiceComponent) {
    }

    ngOnInit(): void {
        this.mainService.getItems().then(items => this.items = items);
    }


    addItem() {
        let item: Item = new Item(this.newItemTitle);
        this.mainService.create(item.name)
            .then(item => {
                this.items.push(item);
                this.newItemTitle = '';
            });
    }


    onSelect(item: Item) {
        this.selectedItem = item;
    }



    /*findComment(item: Item) {
        this.mainService.getComments(item)
            .then(comments => {
                this.allItemComments = comments;
                /!*console.log(this.allItemComments);*!/
                return this.allItemComments;
            })
    }*/

    onItemDelete(item: Item) {
        this.mainService
            .deleteItem(item.id)
            .then(()=> {
                this.items = this.items.filter(i => i !== item);
                if (this.selectedItem === item) {
                    this.selectedItem = null;
                }
            });
    }


}