import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {MainServiceComponent} from "./service/mainService.component";
import {RouterModule} from "@angular/router";
import {ItemsListComponent} from "./components/ItemList/itemList.component";
import {ItemsComponent} from "./components/items.component";
import {ItemComponent} from "./components/Item/item.component";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {ItemsData} from "./Data/ItemsData";
import {CommentListComponent} from "./components/CommentsList/commentsList.component";
import {CommentComponent} from "./components/Comment/comment.component";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(ItemsData),
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: ItemsComponent
            },
            {
                path: 'items',
                component: ItemsListComponent
            },
            {
                path: 'comments',
                component: CommentListComponent
            }

        ])
    ],
    declarations: [
        AppComponent,
        ItemsListComponent,
        ItemComponent,
        ItemsComponent,
        CommentListComponent,
        CommentComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        MainServiceComponent
    ]
})

export class AppModule{}