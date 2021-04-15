import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UsuarioModel } from '../models/usuarios';
import { LoginService } from '../services/login.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any;
  password: string;
  tipoUsuario: string;
  tipo: string;

  constructor(public alertController: AlertController, public router: Router, public modalCtrl: ModalController, private loginService: LoginService, private _usuariosService: UsuariosService ) { 
    this.usuario = this.password = this.tipoUsuario = "";
  }
  usuarios: UsuarioModel = new UsuarioModel();

  async logIn(){
      console.log(this.usuarios); 
      this.loginService.loginUsuario(this.usuarios).then((data: any) =>{
        if (this.usuarios.tipoUsuario == 'Pasajero') {
          this.router.navigate(['/menu-passenger'])
        } else {
          if (this.usuarios.tipoUsuario == 'Pasajero') {
            this.router.navigate(['/menu-driver'])
          }
        }
        
      }).catch((err) =>{
      console.log(err)
      });
    }

  // loginUsuarios(){
  //   console.log(this.usuarios); 
  //   this.loginService.loginUsuario(this.usuarios).then((data: any) =>{
  //     if (this.usuarios.tipoUsuario=='Pasajero') {
  //       this.router.navigate(['/menu-passenger'])
  //     } else {
  //       this.router.navigate(['/menu-driver'])
  //     }
  //   }).catch((err) =>{
  //   console.log(err)
  //   });
  // }
 

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
 
  ngOnInit() {
  }



}
