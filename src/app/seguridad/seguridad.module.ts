import { SeguridadService } from './seguridad.service';
import { SeguridadRoutingModule } from './seguridad.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ],
  declarations: [LoginComponent],
  exports:[
    LoginComponent
  ],
providers:[SeguridadService]
})
export class SeguridadModule { }
