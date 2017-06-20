import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const userAppRoutes: Routes = [
    { path: 'userapp', component: ListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(userAppRoutes)],
    exports: [RouterModule]
})
export class UserAppRoutingModule { }
