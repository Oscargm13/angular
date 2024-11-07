import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicarrouting',
  templateUrl: './tablamultiplicarrouting.component.html',
  styleUrl: './tablamultiplicarrouting.component.css'
})
export class TablamultiplicarroutingComponent {
  public numero ?: number;
  public arrNumeros: Array<number>;
  constructor(private _activeRoute: ActivatedRoute) {
    this.arrNumeros = new Array<number>();
  }

  ngOnInit(): void {
    
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.arrNumeros = [];
      if (parametros['numero'] != null){
        this.numero = parseInt(parametros["numero"]);
        for(let i = 1; i<=10; i++){
          this.arrNumeros.push(this.numero * i);
        }
      }
    })
  }
}
