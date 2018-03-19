import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const appRoutes: Routes = [ {
    path: 'login', component: LoginComponent
}];

// Y por último exportamos appRoutingProviders... que necesita angular
export const appRoutingProviders: any[] = [];
// Y routing que es la que se usa para manejar las rutas en todo el framework
export const routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);
