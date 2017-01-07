import {Routes} from '@angular/router';
import {MapComponent} from "./components/map/map.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {InternalZoneComponent} from "./zones/internal-zone/internal-zone.component";
import {AuthZoneComponent} from "./zones/auth-zone/auth-zone.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";


export const appRoutes: Routes = [
    {
        path: '',
        component: InternalZoneComponent,
        children: [
            {path: '', component: MapComponent}
        ]
    },
    {
        path: '',
        component: AuthZoneComponent,
        children: [
            {path: 'sign-in', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent}
        ]
    },
    {
        path: '**', redirectTo: ''
    }
];
