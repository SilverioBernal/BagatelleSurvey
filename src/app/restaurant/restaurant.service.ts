import { RestaurantModel } from './../Model/restaurant';
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import * as config from '../app.configuration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }
  GetRestaurants() {
    return this.http.get(`${config.appApiUrl}/restaurants`)
    .map(res => <RestaurantModel[]>res.json());
  }

  GetRestaurant(id) {
    return this.http.get(`${config.appApiUrl}/restaurants/${id}`)
    .map(res => this.handleMap(res, id))
    .do(data => console.log('Data: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  AddRestaurant(restaurant: RestaurantModel) {
    return this.http.post(`${config.appApiUrl}/restaurants`, restaurant)
    .map(res => console.log(res.json()));
  }

  DeleteRestaurant(id) {
      return this.http.delete(`${config.appApiUrl}/restaurants/${id}`)
      .map(res => <RestaurantModel>res.json());
  }

  EditRestaurant(restaurant: RestaurantModel) {
    console.log(restaurant);

    return this.http.put(`${config.appApiUrl}/restaurants`, restaurant)
    .map(res => res.json());
  }

  private handleMap(res: any, id: string) {
    const data = <RestaurantModel[]> res.json();

    // Return an initialized object
    if (id === "0") {
        return {
            'description': '',
            'id': 0
        };
    }

    const filtered = data.filter(m => m.id === parseInt(id));
    return <RestaurantModel> filtered[0];
  }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
