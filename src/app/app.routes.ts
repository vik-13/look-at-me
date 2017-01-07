import {Routes} from '@angular/router';
import {MapComponent} from "./components/map/map.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {InternalZoneComponent} from "./zones/internal-zone/internal-zone.component";
import {AuthZoneComponent} from "./zones/auth-zone/auth-zone.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {FriendsComponent} from "./components/friends/friends.component";
import {SettingsComponent} from "./components/settings/settings.component";


export const appRoutes: Routes = [
    {
        path: '', redirectTo: '/map', pathMatch: 'full'
    },
    {
        path: '',
        component: InternalZoneComponent,
        children: [
            {path: 'map', component: MapComponent},
            {path: 'settings', component: SettingsComponent}
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
        path: '**', redirectTo: '/map'
    }
];
