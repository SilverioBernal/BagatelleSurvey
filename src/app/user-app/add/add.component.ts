import { Router } from '@angular/router';
import { UserAppModel } from './../../Model/userApp';
import { UserAppService } from './../user-app.service';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserAppService, private router: Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
        id: [null, Validators.required],
        description: [null, Validators.required],
        rolMesero: [true],
        rolAdmin: [false],
        password: ['', Validators.required],
        active: [true]
    });
  }
 onSubmit() {
    this.userService.Add(<UserAppModel>this.formulario.value).subscribe(res => this.router.navigate(['userapp']));
  }
}
