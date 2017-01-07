import {Component} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MdSnackBar} from "@angular/material";
@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.html',
    styleUrls: ['./sign-in.scss']
})

export class SignInComponent {
    form: FormGroup;

    constructor(public fb: FormBuilder,
                public snackBar: MdSnackBar) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    signIn(form) {
        if (form.valid) {
            console.log('sign-in...');
        } else {
            this.snackBar.open('All fields are required...', 'Try again', {duration: 10000});
        }
    }
}
