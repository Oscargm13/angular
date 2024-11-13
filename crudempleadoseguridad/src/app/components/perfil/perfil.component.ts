import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from '../../models/empleados';
import { EmpleadosService } from '../../service/empleados.service';
import { environment } from '../../../environments/environment.development';
import { EmpleadosaxiosService } from '../../service/empleadosaxios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
	public empleado!: Empleados
	constructor(
		private service: EmpleadosaxiosService,
		private _route: Router
	){}
	ngOnInit(): void {
		if (environment.token == ""){
			this._route.navigate(["/login"]);
		}else{
			this.service.getEmpleados().subscribe(response => {
			this.empleado = response;
			console.log(response);
			return this.empleado
		})
		}
	}
}
