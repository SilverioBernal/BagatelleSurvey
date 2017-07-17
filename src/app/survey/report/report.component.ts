import { Router } from '@angular/router';

import { MaterializeAction, MaterializeDirective } from 'angular2-materialize';
import { Component, OnInit, EventEmitter } from '@angular/core';
declare var Materialize: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  desde: string;
  hasta: string;

  constructor (private router: Router) { }

  ngOnInit() {
    const desde: Date = new Date();

    desde.setDate(desde.getDate() - 30);

    this.desde = desde.toISOString().substring(0, 10);
    this.hasta = new Date().toISOString().substring(0, 10);
  }

  generar() {
    if ( this.desde !== '' || this.desde !== '' ) {
      this.router.navigate(['report', this.desde, this.hasta])
    }
  }
}
