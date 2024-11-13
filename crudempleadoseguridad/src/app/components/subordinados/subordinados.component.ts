import { Component, OnInit } from '@angular/core';
import { Empleados } from '../../models/empleados';
import { EmpleadosaxiosService } from '../../service/empleadosaxios.service';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css'
})
export class SubordinadosComponent implements OnInit{
	public empleado!: Empleados
	constructor(
		private service: EmpleadosaxiosService,
		private _route: Router
	){}
	ngOnInit(): void {
		 if (!environment.token){
		 	this._route.navigate(["/login"]);
			return ;
		 }else{
			this.service.getSubordinados().subscribe(response => {
			this.empleado = response;
			console.log(response);
			return this.empleado
		})
		}
	}
}
