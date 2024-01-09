import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';

export const routes: Routes = [
    {path:"UserLogin", component:LoginComponent},
    {path:"Profile", component:ProfileComponent}
];
