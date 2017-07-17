import { RestaurantGuard } from './../guards/restaurant.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RestaurantRoutingModule } from './restaurant.routing.module';
import { RestaurantService } from './restaurant.service';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    RestaurantRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ListComponent, AddComponent, EditComponent, TopBarComponent],
  declarations: [ListComponent, AddComponent, EditComponent, TopBarComponent],
  providers: [RestaurantService, RestaurantGuard]
})
export class RestaurantModule { }
