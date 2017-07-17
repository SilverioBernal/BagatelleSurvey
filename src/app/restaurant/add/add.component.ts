import { Router } from '@angular/router';
import { RestaurantService } from './../restaurant.service';
import { RestaurantModel } from './../../Model/restaurant';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
      this.formulario = this.formBuilder.group({
        description: [null, Validators.required]
    });
  }

  onSubmit() {
    this.restaurantService.AddRestaurant(<RestaurantModel>this.formulario.value).subscribe(res => this.router.navigate(['restaurant']));
  }
}
