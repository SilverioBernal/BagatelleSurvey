import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  factura: string;

  constructor (private router: Router) { }

  ngOnInit() {
  }

  selectInv() {
    if (this.factura != null) {
      this.router.navigate([`/survey/${this.factura}`, ])
    } else {
      alert('No ingresaste una factura');
    }
  }
}
