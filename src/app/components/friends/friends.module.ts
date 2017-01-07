import {NgModule} from "@angular/core";
import {MdListModule, MdIconModule, MdCheckboxModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {FriendsComponent} from "./friends.component";

@NgModule({
    declarations: [
        FriendsComponent
    ],
    imports: [
        CommonModule,
        MdListModule,
        MdIconModule,
        MdCheckboxModule
    ],
    exports: [
        FriendsComponent
    ]
})

export class FriendsModule {}
