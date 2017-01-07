import {Component} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MdSnackBar} from "@angular/material";
@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.html',
    styleUrls: ['./sign-up.scss']
})

export class SignUpComponent {
    form: FormGroup;

    constructor(public fb: FormBuilder,
                public snackBar: MdSnackBar) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    signUp(form) {
        if (form.valid) {
            console.log('register user');
        } else {
            this.snackBar.open('All fields are required...', 'Try again', {duration: 10000});
        }
    }
}
