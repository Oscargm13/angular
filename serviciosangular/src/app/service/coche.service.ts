import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CocheService {

  constructor(private _http: HttpClient) {}
  getCoches(): Observable<any> {
      let request = "/webresources/coches";
      let url = environment.urlApiCoches + request;
      return this._http.get(url);
    }
}
