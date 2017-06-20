import { UserAppModel } from './../../Model/userApp';
import { ActivatedRoute } from '@angular/router';
import { UserAppService } from './../user-app.service';
import { Component, OnInit } from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usersApp : UserAppModel[];

  constructor(private route: ActivatedRoute, private userAppService: UserAppService) { }

  ngOnInit() {
    this.userAppService.GetAll()
    .subscribe(users => this.usersApp = users);
  }

  deleteUserApp(id:string){

  }
}
