import { RestaurantModel } from './../Model/restaurant';
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import * as config from '../app.configuration';
import 'rxjs/Rx'

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }
  GetAll(){
    return this.http.get(`${config.appApiUrl}/restaurants`)
    .map(res => <RestaurantModel[]>res.json());
  }
}
