import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Departamento } from '../models/departamento';
import { ServiceDepartamentos } from '../services/service.departamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild("cajaid") cajaId!:ElementRef;
  @ViewChild("cajanombre") cajaNombre!:ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!:ElementRef;

  constructor(
    private _service:ServiceDepartamentos,
    private _router: Router
  ){}

  insertDepartamentos(): void {
    console.log(this.cajaId.nativeElement.value+" "+ this.cajaNombre.nativeElement.value
      +" "+this.cajalocalidad.nativeElement.value
    )
    let num = parseInt(this.cajaId.nativeElement.value)
    let nom = this.cajaNombre.nativeElement.value
    let loc = this.cajalocalidad.nativeElement.value
    let newDepartamento = new Departamento(num, nom, loc)

    this._service.insertDepartamento(newDepartamento).subscribe(response => {
      this._router.navigate(["/"]);
      console.log(response);
    })
  }
}
