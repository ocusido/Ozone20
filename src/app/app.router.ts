import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },    
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: HomeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);