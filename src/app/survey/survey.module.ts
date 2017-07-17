import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SurveyService } from './survey.service';
import { SurveyRoutingModule } from './survey.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey/survey.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AnswerComponent } from './answer/answer.component';
import { ReportComponent } from './report/report.component';
import { DataTableModule, CalendarModule } from 'primeng/primeng';
import { ReportDetalleComponent } from './report-detalle/report-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    DataTableModule
  ],
  exports: [SurveyComponent, InvoiceComponent, AnswerComponent, ReportComponent, ReportDetalleComponent],
  declarations: [SurveyComponent, TopBarComponent, InvoiceComponent, AnswerComponent, ReportComponent, ReportDetalleComponent],
  providers: [SurveyService]
})
export class SurveyModule { }
