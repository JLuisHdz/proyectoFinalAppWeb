import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.url}/usuario`).toPromise();
    }

  altaUsuario(usuario: UsuarioModel) {
    console.log(usuario);
    return this.http.post(`${this.url}/usuario`, usuario).toPromise() ;
    
  }
  
}
