import { Injectable } from '@angular/core';
import * as config from '../app.configuration';
import { UserAppModel } from './../Model/userApp';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class SeguridadService {

  usuarioAutenticado: boolean;
  nombreUsuario: string;
  idUsuario: string;
  rolAdmin: boolean;
  rolMesero: boolean;
  tienda: string;

  constructor(private http: Http) { }

  login(credentials: UserAppModel, tienda: string) {
    return this.http.get(`${config.appApiUrl}/userapp/${btoa(credentials.id)}/${btoa(credentials.password)}`)
    .map(res => this.handleMap(res, credentials.id, tienda))
    // .do(data => console.log('Data: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleMap(res: any, id: string, tienda: string) {
    const data = <UserAppModel[]> res.json();

    // Return an initialized object
    if (id === '0') {
        return {
            'password': '',
            'id': ''
        };
    }

    const filtered = data.filter(m => m.id === id);

    if (filtered[0] != null) {
      this.usuarioAutenticado = true;
      this.idUsuario = filtered[0].id;
      this.nombreUsuario = filtered[0].description;
      this.rolMesero = (<UserAppModel> filtered[0]).rolMesero;
      this.rolAdmin = (<UserAppModel> filtered[0]).rolAdmin;
      this.tienda = tienda;
      console.log(filtered[0]);

    } else {
      this.usuarioAutenticado = false;
    }

    return <UserAppModel> filtered[0];
  }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    usuarioEstaAutenticado() {
      return this.usuarioAutenticado;
    }

    usuarioAdmin() {
      return this.rolAdmin;
    }

    usuarioMesero() {
      return this.rolMesero;
    }

    nombreUsuarioAutenticado() {
      return this.nombreUsuario;
    }

    idUsuarioAutenticado() {
      return this.idUsuario;
    }

    tiendaAutenticada() {
      return this.tienda;
    }
}
