import { Component } from "@angular/core";

@Component({
	selector: "app-deportes",
	templateUrl: "./deportes.component.html"
})

export class DeportesComponent {
	public sports: Array<string>;
	constructor() {
		this.sports = ["Canicas", "Padel", "Petanca", "Curling", "Dardos"]
	}
} 