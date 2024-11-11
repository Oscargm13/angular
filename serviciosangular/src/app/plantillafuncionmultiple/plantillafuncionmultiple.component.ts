// import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PlantillaService {
//   public funcionesSeleccionadas = new Array<string>()
//   constructor(private _http: HttpClient) {}
//   getFunciones(): Observable<any> {
//     let request = "https://apiplantillacore.azurewebsites.net/api/plantilla/funciones";
//     let url = request;
//     return this._http.get(url);
//   }
//   mostrarPlantilla():void {
//     let aux = new Array<string>();
//     for(var option of this.selectFunciones.nativeElement.options){
//       if (option of this.selectFunciones.nativeElement.options){

//       }
//     }
//   }
//   getPlantillaFunciones(funciones: Array<string>): Observable<any> {
//     let data = "";
//     for(var funcion of funciones) {
//       data += funcion;
//     }
//     data = data.substring(0, data.length -1);
//     let request = "";
//     let url = ""

//   }
// }