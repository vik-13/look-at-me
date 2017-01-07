import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {MapComponent} from "./components/map/map.component";
import {ZonesModule} from "./zones/zones.module";

import { AgmCoreModule } from 'angular2-google-maps/core';

import {appRoutes} from "./app.routes";
import {SignInModule} from "./components/sign-in/sign-in.module";
import {SignUpModule} from "./components/sign-up/sign-up.module";
import {SettingsComponent} from "./components/settings/settings.component";
import {SharedModule} from "./shared/shared.module";

export const firebaseConfig = {
    apiKey: "AIzaSyDMXtuuM6cd5pKeoVHiaTDkF6EfNkHzoO4",
    authDomain: "look-at-me-32a91.firebaseapp.com",
    databaseURL: "https://look-at-me-32a91.firebaseio.com",
    storageBucket: "look-at-me-32a91.appspot.com",
    messagingSenderId: "884806054139"
};

const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};

@NgModule({
    declarations: [
        AppComponent,
        SettingsComponent,
        MapComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCknDrX9kTGd0Md9t-Uk3a5ka8XuBZtyjI'
        }),

        ZonesModule,
        SharedModule,
        SignInModule,
        SignUpModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
