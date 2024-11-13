import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { environment } from '../../environments/environment.development';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EmpleadosaxiosService {
	public login!: Login;
	constructor() { }

	getToken(login: Login): Observable<any> {
		let request = "Auth/Login";
		let url = environment.urlApiEmpleados + request;
		return new Observable(observer => {
			axios.post(url, login).then(response => {
				observer.next(response.data);
				observer.complete();
				console.log(response);
			})
		})
	}
	getEmpleados(): Observable<any> {
		let token = environment.token;
		let request = "api/Empleados/PerfilEmpleado";
		let url = environment.urlApiEmpleados + request;
		return new Observable(observer => {
			axios.get(url, {
				headers: {
					'Authorization': "Bearer " + token
				}
			}).then(response => {
				observer.next(response.data);
				observer.complete();
			})
		});
	}
	getSubordinados(): Observable<any> {
		let token = environment.token;
		let request = "api/Empleados/Subordinados";
		let url = environment.urlApiEmpleados + request;

		return new Observable(observer => {
			axios.get(url, {
				headers: {
					'Authorization': "bearer " + token
				}
			}).then(response => {
				observer.next(response.data);
				observer.complete();
			})
		})
	}
	
}