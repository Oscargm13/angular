import { Component } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { PlantillaService } from '../../service/plantilla.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public plantillas!: Array<Plantilla>;
  constructor(private _service: PlantillaService){
  
  }
  // ngOnInit(): void {
  //   this._service.getPlantilla().subscribe(response => {
  //     this.plantillas = response;
  //     console.log(response)
  //   })
  // }
}
