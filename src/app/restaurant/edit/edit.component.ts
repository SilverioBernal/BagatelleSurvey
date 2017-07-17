import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RestaurantModel } from './../../Model/restaurant';
import { Subscription, Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  restaurant: RestaurantModel;
  errorMessage: string;

  constructor(private restaurantService: RestaurantService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.getRestaurant(id);
  }

  getRestaurant(id: number) {
    this.restaurantService.GetRestaurant(id)
    .subscribe(
      restaurant => this.onRestaurantRetrieve(restaurant),
      error => this.errorMessage = <any>error
    );
  }

  onRestaurantRetrieve(restaurant: RestaurantModel) {
    this.restaurant = restaurant;
  }

  onSubmit(editForm) {
    this.restaurantService.EditRestaurant(<RestaurantModel>editForm.value)
    .subscribe(res => this.router.navigate(['restaurant']));
  }
}
