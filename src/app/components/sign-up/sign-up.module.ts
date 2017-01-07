import {NgModule} from "@angular/core";
import {MdCardModule, MdButtonModule, MdInputModule} from "@angular/material";
import {SignUpComponent} from "./sign-up.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        SignUpComponent
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

export class SignUpModule {}
