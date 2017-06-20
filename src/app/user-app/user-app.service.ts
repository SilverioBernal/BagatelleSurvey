import { UserAppModel } from './../Model/userApp';
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import * as config from '../app.configuration';
import 'rxjs/Rx'


@Injectable()
export class UserAppService {

  constructor(private http: Http) { }

  GetAll(){
    return this.http.get(`${config.appApiUrl}/userapp`)
    .map(res => <UserAppModel[]>res.json());
  }

}
