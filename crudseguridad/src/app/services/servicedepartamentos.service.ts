import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class ServicedepartamentosService {

  constructor(private _http: HttpClient) { }
  postLogin(login: Login): Observable<any> {
    let request = "auth/login";
    let url = environment.urlApiEmpleados + request;
    return this._http.post(url, login);
  }
  getEmpleados(): Observable<any> {
    let header = new HttpHeaders().set('Authorization', `Bearer ${environment.token}`);
    let request = "api/empleados";
    let url = environment.urlApiEmpleados + request;
    return this._http.get(url, {headers: header});
  }
}
