import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class datosService {
  telefono: string
  rfc: string
  imagen: string
  datosp: Array<any>
  constructor() {
    this.datosp = [
      this.telefono,
      this.rfc,
      this.datosp
    ]
  }
}