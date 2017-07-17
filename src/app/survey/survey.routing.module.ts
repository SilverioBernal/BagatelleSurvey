import { RestaurantGuard } from './../guards/restaurant.guard';
import { ReportDetalleComponent } from './report-detalle/report-detalle.component';
import { ReportComponent } from './report/report.component';
import { AnswerComponent } from './answer/answer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AuthGuard } from './../guards/auth.guard';
import { SurveyComponent } from './survey/survey.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const surveyRoutes: Routes = [
  { path: 'survey/:id', component: SurveyComponent
    , canActivate: [AuthGuard]
  },
  { path: 'answer/:idinvoice/:answer', component: AnswerComponent
    , canActivate: [AuthGuard]
  },
  { path: 'invoice', component: InvoiceComponent
    , canActivate: [AuthGuard]
  },
  { path: 'report', component: ReportComponent
    , canActivate: [RestaurantGuard]
  },
  { path: 'report/:desde/:hasta', component: ReportDetalleComponent
    , canActivate: [RestaurantGuard]
  }
];

@NgModule({
    imports: [RouterModule.forChild(surveyRoutes)],
    exports: [RouterModule]
})
export class SurveyRoutingModule { }
