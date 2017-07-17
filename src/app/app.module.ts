import { SurveyModule } from './survey/survey.module';
import { AuthGuard } from './guards/auth.guard';
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
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,

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
    AppRoutingModule,
    SurveyModule
  ],
  exports: [],
  providers: [
    SeguridadModule, AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
