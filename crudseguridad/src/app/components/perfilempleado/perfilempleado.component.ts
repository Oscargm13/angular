import { Component, OnInit } from '@angular/core';
import { ServicedepartamentosService } from '../../services/servicedepartamentos.service';
import { Router } from '@angular/router';
import { Empleados } from '../../models/empleados';

@Component({
  selector: 'app-perfilempleado',
  templateUrl: './perfilempleado.component.html',
  styleUrl: './perfilempleado.component.css'
})
export class PerfilempleadoComponent implements OnInit{
  empleados!: Array<Empleados>;
  constructor(
    private _service: ServicedepartamentosService,
  ){}
  ngOnInit(): void {
      this._service.getEmpleados().subscribe(response => {
        console.log(response);
      })
  }
}
