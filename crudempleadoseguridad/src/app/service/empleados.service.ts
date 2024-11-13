import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { environment } from '../../environments/environment.development';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
	public login!: Login;
  constructor(
	private _http: HttpClient,
  ) {}

  getToken(login: Login): Observable<any> {
	let json = JSON.stringify(login);
	let header = new HttpHeaders().set("Content-type", "application/json");
	let request = "Auth/Login";
	let url = environment.urlApiEmpleados + request;
	return this._http.post(url, json, {headers: header});
  }
  getEmpleados(): Observable<any> {
	let token = environment.token;
	let header = new HttpHeaders().set('Authorization', "bearer "+ token);
	let request = "api/Empleados/PerfilEmpleado";
	let url = environment.urlApiEmpleados + request;
	return this._http.get(url, {headers: header});
  }
}
