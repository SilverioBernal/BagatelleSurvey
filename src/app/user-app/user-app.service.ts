import { UserAppModel } from './../Model/userApp';
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import * as config from '../app.configuration';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'


@Injectable()
export class UserAppService {

  constructor(private http: Http) { }


  GetAll() {
    return this.http.get(`${config.appApiUrl}/userapp`)
    .map(res => <UserAppModel[]>res.json());
  }

    GetOne(id) {
    return this.http.get(`${config.appApiUrl}/userapp/${id}`)
    .map(res => this.handleMap(res, id))
    .do(data => console.log('Data: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  Add(user: UserAppModel) {
    return this.http.post(`${config.appApiUrl}/userapp`, user)
    .map(res => console.log(res.json()));
  }

  Delete(id) {
      return this.http.delete(`${config.appApiUrl}/userapp/${id}`)
      .map(res => <UserAppModel>res.json());
  }

  Edit(user: UserAppModel) {
    console.log(user);

    return this.http.put(`${config.appApiUrl}/userapp`, user)
    .map(res => res.json());
  }

  private handleMap(res: any, id: string) {
    const data = <UserAppModel[]> res.json();

    // Return an initialized object
    if (id === "0") {
        return {
            'description': '',
            'id': 0
        };
    }

    const filtered = data.filter(m => m.id === id);
    return <UserAppModel> filtered[0];
  }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
