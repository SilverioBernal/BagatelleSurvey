import { BrowserModule } from '@angular/platform-browser';
import { RestaurantService } from './../../restaurant/restaurant.service';
import { RestaurantModel } from './../../Model/restaurant';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserAppModel } from './../../Model/userApp';
import { SeguridadService } from './../seguridad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UserAppModel;
  tiendas: RestaurantModel[];
  errorMessage: string;
  selected: string;

  constructor(private authService: SeguridadService, private restSrvc: RestaurantService, private router: Router) {
    this.usuario = new UserAppModel();
    this.usuario.id = '';
    this.usuario.password = '';

    this.restSrvc.GetRestaurants()
    .subscribe(res => this.tiendas = res);
  }

  ngOnInit() {
  }

  onSubmit(editForm) {

    // const pepe = JSON.stringify(<UserAppModel>editForm.value);
    // console.log(btoa(pepe));

    // console.log(<UserAppModel>JSON.parse(atob(btoa(pepe))));
    this.getUser(<UserAppModel>editForm.value);
  }

  getUser(usr: UserAppModel) {
    this.authService.login(usr, this.selected)
    .subscribe(
      user => this.onUserRetrieve(user),
      error => this.errorMessage = <any>error
    );
  }

  onUserRetrieve(user: UserAppModel) {
    if (user != null) {
      const key = btoa(JSON.stringify(user));
      this.router.navigate(['/']);
    } else {
      this.usuario.password = '';
    }

  }
}
