import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosModel } from '../models/datos';


@Injectable({
  providedIn: 'root'
})
export class datosService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get(`${this.url}/datos`).toPromise();
    }

  postDatos(datosp: DatosModel) {
    console.log(datosp);
    return this.http.post(`${this.url}/datos`, datosp).toPromise() ;
    
  }
  
}
