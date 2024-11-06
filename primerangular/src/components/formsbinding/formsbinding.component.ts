import { Component } from '@angular/core';

@Component({
	selector: 'app-formsbinding',
	templateUrl: './formsbinding.component.html',
	styleUrl: './formsbinding.component.css'
})
export class FormsbindingComponent {
	public user: any;
	public mensaje: string;

	constructor() {
		this.mensaje = "";
		this.user = {
			nombre: "",
			apellidos: "",
			edad: 0
		}
	}
	recibirDatos(): void {
		this.mensaje = "Datos recibidos";
	}
}
