import { RestaurantGuard } from './../guards/restaurant.guard';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const restaurantRoutes: Routes = [
    { path: 'restaurant', component: ListComponent, canActivate: [RestaurantGuard] },
    { path: 'restaurant/add', component: AddComponent, canActivate: [RestaurantGuard] },
    { path: 'restaurant/:id', component: EditComponent, canActivate: [RestaurantGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(restaurantRoutes)],
    exports: [RouterModule]
})
export class RestaurantRoutingModule { }
