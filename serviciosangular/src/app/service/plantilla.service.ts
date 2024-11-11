import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  constructor(private _http: HttpClient) {}
  getFunciones(): Observable<any> {
    let request = "https://apiplantillacore.azurewebsites.net/api/plantilla/funciones";
    let url = request;
    return this._http.get(url);
  }
  getPlantillas(): Observable<any> {
    let request = "https://apiplantillacore.azurewebsites.net/api/plantilla";
    let url = request;
    return this._http.get(url);
  }
}
