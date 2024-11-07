import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css'
})
export class NumerodobleComponent implements OnInit{
  //ESTA VARIABLE NO TINE NADA QUE VER CON EL PARAM
  public numero ?: number;
  public doble ?: number;

  constructor(private _activeRoute: ActivatedRoute, private router: Router) {

  }

  goToHome(): void {
    this.router.navigate(["/"]);
  }

  redirect(num: number): void {
    //NOS VAMOS A LLAMAR A NOSOTROS MISMOS CON EL PARAMETRO DEL NUMERO RECIBIDO
    this.router.navigate(["/numerodoble", num]);
  }

  ngOnInit(): void {
      //AQUI DEBEMOS SUSCRIBIRNOS A LOS PARAMETROS QUE PUEDAN VENIR EN LA RUTA
      this._activeRoute.params.subscribe((parametros: Params) => {
        //DENTRO DE LA VARIABLE PARAMS SE RECUPERAN LOS PARAMETROS POR SU NOMBRE
        //EN ESTE EJEMPLO EL PARAMETRO SERA OPCIONAL PREGUNTAMOS ANTES DE ASIGNAR
        if (parametros['numero'] != null){
          this.numero = parseInt(parametros["numero"]);
          this.doble = this.numero * 2;
        }
      })
  }
}
