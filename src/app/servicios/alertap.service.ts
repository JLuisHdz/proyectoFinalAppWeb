import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertapService {
  tipoAlerta: string
  otraAlerta: string
  alertap: Array<any>
  constructor() {
    this.alertap = [
      this.tipoAlerta,
      this.otraAlerta
    ]
  }
}