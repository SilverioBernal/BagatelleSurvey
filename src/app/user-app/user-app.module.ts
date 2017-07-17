import { RestaurantGuard } from './../guards/restaurant.guard';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserAppService } from './user-app.service';
import { UserAppRoutingModule } from './user-app.routing.module';
import { DataTableModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    UserAppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ListComponent,
    AddComponent,
    ],
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    TopBarComponent],
  providers: [UserAppService, RestaurantGuard]
})
export class UserAppModule { }
