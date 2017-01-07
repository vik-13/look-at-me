import {NgModule} from "@angular/core";
import {MdCardModule, MdButtonModule, MdInputModule} from "@angular/material";
import {SignInComponent} from "./sign-in.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule
    ]
})

export class SignInModule {}
