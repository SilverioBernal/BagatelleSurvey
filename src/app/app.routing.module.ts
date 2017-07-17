import { RestaurantGuard } from './guards/restaurant.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './seguridad/login/login.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'restaurant',
    loadChildren: 'app/restaurant/restaurant.module#RestaurantModule',
    canActivate: [RestaurantGuard],
    //canActivateChild: [RestaurantGuard],
  },
  /*
  { path: 'userapp',
    loadChildren: 'app/user-app/user-app.module#UserAppModule',
    canActivate: [RestaurantGuard],
    //canActivateChild: [RestaurantGuard],
  },
  */
  /*
  { path: 'survey',
    loadChildren: 'app/survey/survey.module#SurveyModule',
    canActivate: [AuthGuard],
    canActivateChild: [RestaurantGuard]
  },*/
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
