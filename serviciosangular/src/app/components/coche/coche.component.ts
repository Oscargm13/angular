import { Component } from '@angular/core';
import { CocheService } from '../../service/coche.service';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrl: './coche.component.css'
})
export class CocheComponent {
  public coches!: Array<Coche>;
  constructor(private _service: CocheService){
  
  }
  ngOnInit(): void {
    this._service.getCoches().subscribe(response => {
      this.coches = response;
    })
  }
}
