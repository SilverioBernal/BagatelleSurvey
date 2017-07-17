import { SeguridadService } from './../../seguridad/seguridad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  idInvoice: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idInvoice = this.route.snapshot.params['id'];
  }
}
