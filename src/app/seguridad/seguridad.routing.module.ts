import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const seguridadRoutes: Routes = [
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(seguridadRoutes)],
    exports: [RouterModule]
})
export class SeguridadRoutingModule { }
