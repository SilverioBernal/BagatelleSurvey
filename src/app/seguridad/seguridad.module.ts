import { MaterializeModule } from 'angular2-materialize';
import { AppModule } from './../app.module';
import { FormsModule } from '@angular/forms';
import { SeguridadService } from './seguridad.service';
import { SeguridadRoutingModule } from './seguridad.routing.module';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    MaterializeModule
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  bootstrap: [],
providers: [SeguridadService]
})
export class SeguridadModule { }
