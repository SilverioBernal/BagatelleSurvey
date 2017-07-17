import { SurveyService } from './../survey.service';
import { SurveyModel } from './../../Model/survey';
import { SeguridadService } from './../../seguridad/seguridad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  survey: SurveyModel;
s
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: SeguridadService,
    private surveyService: SurveyService
  ) {
    this.survey = new SurveyModel();
   }

  ngOnInit() {

     this.survey.userId = this.authService.idUsuarioAutenticado();
     this.survey.restaurantId = this.authService.tiendaAutenticada();

     // this.survey.userId = '23';
    // this.survey.restaurantId = '4'

    this.survey.answer = this.route.snapshot.params['answer'];
    this.survey.invoiceId = this.route.snapshot.params['idinvoice'];

    this.surveyService.Add(this.survey).subscribe(res => console.log(res));
  }

}
