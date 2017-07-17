import { SeguridadService } from './../../seguridad/seguridad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  usuario: string;

  constructor(private authService: SeguridadService) { }

  ngOnInit() {
    console.log('init');
    this.usuario = this.authService.nombreUsuarioAutenticado();
    console.log(this.authService.nombreUsuarioAutenticado());
    console.log(this.authService.usuarioEstaAutenticado());
  }

}
