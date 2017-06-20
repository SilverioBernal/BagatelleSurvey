import { UserAppService } from './user-app.service';
import { UserAppRoutingModule } from './user-app.routing.module';
import { DataTableModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    UserAppRoutingModule
  ],
  exports:[ListComponent, AddComponent],
  declarations: [ListComponent, AddComponent],
  providers:[UserAppService]
})
export class UserAppModule { }
