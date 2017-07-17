import { RestaurantGuard } from './../guards/restaurant.guard';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const userAppRoutes: Routes = [
    { path: 'userapp', component: ListComponent, canActivate: [RestaurantGuard] },
    { path: 'userapp/add', component: AddComponent, canActivate: [RestaurantGuard] },
    { path: 'userapp/:id', component: EditComponent, canActivate: [RestaurantGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(userAppRoutes)],
    exports: [RouterModule]
})
export class UserAppRoutingModule { }
