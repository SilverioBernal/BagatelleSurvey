import { element } from 'protractor';
import { SeguridadService } from './../seguridad/seguridad.service';
import { Observable } from 'rxjs/Observable';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: SeguridadService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

      console.log('CanActivate');
      if (this.authService.usuarioEstaAutenticado()) {
        return true;
      }

      this.router.navigate(['/login']);

      return false;
    }

}
