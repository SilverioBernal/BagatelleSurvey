import { RestaurantRoutingModule } from './restaurant.routing.module';
import { RestaurantService } from './restaurant.service';
import { DataTableModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    RestaurantRoutingModule
  ],
  exports:[ListComponent, AddComponent],
  declarations: [ListComponent, AddComponent],
  providers:[RestaurantService]
})
export class RestaurantModule { }
