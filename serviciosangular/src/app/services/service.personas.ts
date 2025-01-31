import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../global";
import { environment } from "../../environments/environment";

@Injectable()
export class ServicePersonas {

    //PARA LAS PETICIONES API VIENE UN OBJETO LLAMADO 
    //HttpClient QUE NOS PERMITIRA REALIZAR LAS PETICIONES
    constructor(private _http: HttpClient) {}

    getPersonas(): Observable<any> {
        let urlApiPersonas = environment.urlApiPersonas;

        //TENEMOS DOS FORMAS DE REALIZAR LA FUNCIONALIDAD DE DEVOLUCION DE 
        //DATOS
        //1) IGUAL QUE EN VUE, CREANDO UNA PROMESA POR ENCIMA DE ESTE METODO
        //2) DEVOLVER DIRECTAMENTE LA PETICION PARA QUE SEA EL COMPONENT
        //QUIEN SE SUBSCRIBA
        return this._http.get(urlApiPersonas);
    }
    getPersonasPromesa(): Promise<any> {
        let urlApiPersonas= Global.urlApiPersonas;
        let promise = new Promise((resolve) => {
            this._http.get(urlApiPersonas).subscribe((response) => {
                resolve(response)
            })
        })
        return promise
    }
}