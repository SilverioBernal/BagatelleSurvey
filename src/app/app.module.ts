import { UserAppModule } from './user-app/user-app.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { SeguridadModule } from './seguridad/seguridad.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import "materialize-css";
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    SeguridadModule,
    RestaurantModule,
    UserAppModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [
    SeguridadModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
