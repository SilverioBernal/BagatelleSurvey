import { RestaurantModel } from './../../Model/restaurant';
import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule, SharedModule} from 'primeng/primeng';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  restaurants: RestaurantModel[];

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit() {
    this.loadData()
  }

  deleteRestaurant(id) {
    this.restaurantService.DeleteRestaurant(id).subscribe(res => this.loadData());
  }

  loadData() {
  this.restaurantService.GetRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }
}
