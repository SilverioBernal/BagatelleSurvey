import { SurveyModel } from './../Model/survey';
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import * as config from '../app.configuration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';
@Injectable()
export class SurveyService {

  constructor(private http: Http) { }

  Add(survey: SurveyModel) {

    console.log(survey)
    return this.http.post(`${config.appApiUrl}/survey`, survey)
    .map(res => console.log(res.json()));
  }

  list(from: string, to: string) {
    return this.http.get(`${config.appApiUrl}/survey/${from}/${to}`)
    .map(res => <SurveyModel[]>res.json()[0])
    .do(data => console.log('Data: ' + JSON.stringify(data)));
  }
}
