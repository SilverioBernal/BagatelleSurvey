import { RestaurantModel } from './../../Model/restaurant';
import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  restaurants : RestaurantModel[];

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.GetAll()
    .subscribe(restaurants => this.restaurants = restaurants);
  }

  deleteRestaurant(id:string){

  }

}
