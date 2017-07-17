import { ActivatedRoute } from '@angular/router';
import { SurveyService } from './../survey.service';
import { SurveyModel } from './../../Model/survey';
import { SurveyComponent } from './../survey/survey.component';
import { Component, OnInit } from '@angular/core';
import { DataTableModule, SharedModule} from 'primeng/primeng';

@Component({
  selector: 'app-report-detalle',
  templateUrl: './report-detalle.component.html',
  styleUrls: ['./report-detalle.component.css']
})
export class ReportDetalleComponent implements OnInit {

  surveys: SurveyModel[];

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit() {
    const from = this.route.snapshot.params['desde'];
    const to = this.route.snapshot.params['hasta'];

    this.loadData(from, to);
  }

  loadData(from: string, to: string) {
  this.surveyService.list(from, to)
      .subscribe(surveys => this.surveys = surveys);
      //.subscribe(surveys => console.log( surveys[0]));
  }

}
