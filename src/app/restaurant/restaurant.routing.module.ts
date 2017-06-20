import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const restaurantRoutes: Routes = [
    { path: 'restaurant', component: ListComponent },
    { path: 'restaurant/add', component: AddComponent },
];

@NgModule({
    imports: [RouterModule.forChild(restaurantRoutes)],
    exports: [RouterModule]
})
export class RestaurantRoutingModule { }
