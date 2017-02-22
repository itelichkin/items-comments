import {Item} from "../Models/item.model";
import {Http, Headers} from "@angular/http";
import {Injectable, Input} from "@angular/core";

import 'rxjs/add/operator/toPromise';
import {Comment} from "../Models/comment.model";


@Injectable()
export class MainServiceComponent {
    @Input() selectedItem: Item;

    comments: Array<Comment> = [];
    private itemsUrl = 'app/items';
    private headers = new Headers({'Content-Type': 'application/json'});
    private headersComment = new Headers({'Content-Type': 'application/json'});
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


    constructor(private http: Http) {
    }


    getItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(response => response.json().data as Item[])
            .catch(this.handleError);
    }


    deleteItem(id: number): Promise<void> {
        const url = `${this.itemsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(()=>null)
            .catch(this.handleError);
    }


    create(name: any): Promise<Item> {
        return this.http
            .post(this.itemsUrl, JSON.stringify({name: name, comments: this.comments}), {headers: this.headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    addComment(item: Item, comment: any){
        const url = `${this.itemsUrl}/${item.comments}`;
        return this.http
            .post(url, JSON.stringify({message: comment}))
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

}