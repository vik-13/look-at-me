import {NgModule} from "@angular/core";
import {MdCardModule, MdButtonModule, MdInputModule, MdInputContainer} from "@angular/material";
import {SignInComponent} from "./sign-in.component";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        RouterModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule
    ]
})

export class SignInModule {}
