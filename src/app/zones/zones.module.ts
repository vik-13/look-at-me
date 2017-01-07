import {NgModule} from "@angular/core";
import {AuthZoneComponent} from "./auth-zone/auth-zone.component";
import {InternalZoneComponent} from "./internal-zone/internal-zone.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        AuthZoneComponent,
        InternalZoneComponent
    ]
})

export class ZonesModule {}
