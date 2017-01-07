import {NgModule} from "@angular/core";
import {AuthZoneComponent} from "./auth-zone/auth-zone.component";
import {InternalZoneComponent} from "./internal-zone/internal-zone.component";
import {RouterModule} from "@angular/router";
import {
    MdToolbarModule, MdSidenavModule, MdIconModule, MdButtonModule, MdListModule,
    MdRippleModule, MdCheckboxModule, MdSlideToggleModule
} from "@angular/material";
import {FriendsModule} from "../components/friends/friends.module";

@NgModule({
    imports: [
        RouterModule,
        MdToolbarModule,
        MdSidenavModule,
        MdIconModule,
        MdButtonModule,
        MdListModule,
        MdRippleModule,
        MdCheckboxModule,
        MdSlideToggleModule,

        FriendsModule
    ],
    declarations: [
        AuthZoneComponent,
        InternalZoneComponent
    ]
})

export class ZonesModule {}
