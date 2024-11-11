import { Component } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { PlantillaService } from '../../service/plantilla.service';

@Component({
  selector: 'app-datos-plantilla',
  templateUrl: './datos-plantilla.component.html',
  styleUrl: './datos-plantilla.component.css'
})
export class DatosPlantillaComponent {
  public plantillas!: Array<Plantilla>;
  constructor(private _service: PlantillaService){
  
  }
  ngOnInit(): void {
    this._service.getFunciones().subscribe(response => {
      this.plantillas = response;
      console.log(response)
    })
  }
}
