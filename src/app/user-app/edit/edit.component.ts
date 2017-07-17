import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserAppModel } from './../../Model/userApp';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAppService } from './../user-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: UserAppModel;
  admin: boolean;
  mesero: boolean;
  active: boolean;
  errorMessage: string;

  constructor(private userService: UserAppService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const idUsr = this.route.snapshot.params['id'];

    this.getUser(idUsr);
  }

  getUser(idUsr: string) {
    this.userService.GetOne(idUsr)
    .subscribe(
      user => this.onUserRetrieve(user),
      error => this.errorMessage = <any>error
    );
  }

  onUserRetrieve(user: UserAppModel) {
    this.user = user;
    if (user.rolAdmin) {
      this.admin = true;
    }

    if (user.rolMesero) {
      this.mesero = true;
    }
    console.clear();
  }

  onSubmit(editForm) {
    const model: UserAppModel = <UserAppModel>editForm.value;

    model.active = this.user.active;
    this.userService.Edit(model).subscribe(res => this.router.navigate(['userapp']));
  }
}
