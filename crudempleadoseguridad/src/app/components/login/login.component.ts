import { Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EmpleadosService } from '../../service/empleados.service';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { EmpleadosaxiosService } from '../../service/empleadosaxios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
	@ViewChild("cajauser") cajaUsuario!: ElementRef;
	@ViewChild("cajapass") cajaPass!: ElementRef;
	public login!: Login;
	constructor(
		private _service: EmpleadosaxiosService,
		private _router: Router
	){}

	public getToken(): void {
		let usuario = this.cajaUsuario.nativeElement.value;
		let pass = this.cajaPass.nativeElement.value;
		this.login = new Login(usuario, pass);
		this._service.getToken(this.login).subscribe(response => {
			environment.token = response.response;
			console.log(response.response);
			//this._router.navigate(["/perfil"]);
		});
	}
}
