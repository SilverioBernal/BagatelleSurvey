import { Observable } from 'rxjs/Observable';
import { SeguridadService } from './../seguridad/seguridad.service';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class RestaurantGuard implements CanActivate {

  constructor(
    private authService: SeguridadService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      console.log('CanActivateRestaurant');
      if (this.authService.usuarioEstaAutenticado() && this.authService.usuarioAdmin()) {
        return true;
      }

      this.router.navigate(['/']);

      return false;
    }

}
