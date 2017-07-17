import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetalleComponent } from './report-detalle.component';

describe('ReportDetalleComponent', () => {
  let component: ReportDetalleComponent;
  let fixture: ComponentFixture<ReportDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
