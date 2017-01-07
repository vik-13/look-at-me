import {NgModule} from "@angular/core";
import {MdCardModule, MdButtonModule, MdInputModule, MdInputContainer} from "@angular/material";
import {SignUpComponent} from "./sign-up.component";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        RouterModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule
    ]
})

export class SignUpModule {}
